import assert from 'node:assert/strict'
import test from 'node:test'

const {
  contactFormSchema,
  enrollmentSchema,
  validateForm,
} = await import(new URL('../lib/validations.ts', import.meta.url))

const validContact = {
  firstName: 'Asha',
  lastName: 'Raut',
  phone: '+91 98765 43210',
  email: 'asha@example.com',
  service: 'Hair styling',
  preferredDate: '2026-11-15',
  message: 'I would like to request an appointment.',
}

test('contact validation accepts a complete request', () => {
  const result = validateForm(contactFormSchema, validContact)

  assert.equal(result.success, true)
  if (result.success) {
    assert.equal(result.data.email, validContact.email)
  }
})

test('contact validation accepts blank optional details', () => {
  const result = contactFormSchema.safeParse({
    ...validContact,
    lastName: '',
    email: '',
    preferredDate: '',
  })

  assert.equal(result.success, true)
})

test('contact validation rejects invalid names, email, phone, and overlong messages', () => {
  const cases = [
    { firstName: 'A1', expectedField: 'firstName' },
    { email: 'not-an-email', expectedField: 'email' },
    { phone: 'invalid phone', expectedField: 'phone' },
    { message: 'x'.repeat(1001), expectedField: 'message' },
  ]

  for (const invalid of cases) {
    const result = validateForm(contactFormSchema, { ...validContact, ...invalid })

    assert.equal(result.success, false)
    if (!result.success) {
      assert.ok(result.errors[invalid.expectedField])
    }
  }
})

test('enrollment validation rejects unsupported experience values', () => {
  const result = enrollmentSchema.safeParse({
    fullName: 'Asha Raut',
    phone: '+91 98765 43210',
    email: 'asha@example.com',
    course: 'Beauty training',
    experience: 'expert',
  })

  assert.equal(result.success, false)
})

test('phone numbers need 10-15 real digits, not just spaces or dashes', () => {
  for (const phone of ['----------', '          ', '+-- -- -- -- --', '12345 -----']) {
    assert.equal(contactFormSchema.safeParse({ ...validContact, phone }).success, false, phone)
    assert.equal(
      enrollmentSchema.safeParse({
        fullName: 'Asha Raut',
        phone,
        email: 'asha@example.com',
        course: 'Beauty training',
        experience: 'none',
      }).success,
      false,
      phone,
    )
  }
  assert.equal(contactFormSchema.safeParse({ ...validContact, phone: '98765-43210' }).success, true)
})

test('contact names may use Devanagari letters (Marathi/Hindi)', () => {
  const result = contactFormSchema.safeParse({ ...validContact, firstName: 'आशा', lastName: 'राऊत' })
  assert.equal(result.success, true)
  assert.equal(contactFormSchema.safeParse({ ...validContact, firstName: 'A1' }).success, false)
})
