import assert from 'node:assert/strict'
import test from 'node:test'

const { staffForService, staffMembers } = await import(new URL('../lib/data/staff.ts', import.meta.url))

test('a full service name matches the shorter specialization', () => {
  const staff = staffForService('Essential Bridal Makeup')
  assert.ok(staff.length > 0)
  assert.ok(staff.every((member) => member.specialization.includes('Bridal Makeup')))
})

test('a service with no specialist falls back to all staff', () => {
  assert.deepEqual(staffForService('Classic Saree Draping'), staffMembers)
})

test('no service shows all staff', () => {
  assert.deepEqual(staffForService(''), staffMembers)
})
