// Utilities
export { cn, formatPrice, formatDate, debounce, isClient, prefersReducedMotion, generateId, truncate, absoluteUrl } from './utils'

// Hooks
export {
    useMediaQuery,
    useScrollPosition,
    useInView,
    useLocalStorage,
    useDebounce,
    usePrefersReducedMotion,
    useClickOutside,
    useKeyboardShortcut,
    useWindowSize,
    useOnlineStatus
} from './hooks'

// Validations
export {
    contactFormSchema,
    newsletterSchema,
    enrollmentSchema,
    validateForm,
    type ContactFormData,
    type NewsletterData,
    type EnrollmentData
} from './validations'

// Constants
export { BUSINESS_INFO, NAV_LINKS } from './constants'

// Data
export { staffMembers, type StaffMember } from './data/staff'

// Firebase (Server-side only)
export { firebaseAdmin, db } from './firebaseAdmin'
