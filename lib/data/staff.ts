// Centralized staff data used across StaffProfiles and StaffSelection
export interface StaffMember {
    id: string
    name: string
    role: string
    image: string
    experience: string
    specialization: string[]
    certifications: string[]
    rating: number
    reviews: number
    availability?: string[]
    nextAvailable?: string
    popular?: boolean
    imagePosition?: string
    social?: {
        instagram?: string
        facebook?: string
    }
}


export const staffMembers: StaffMember[] = [
    {
        id: 'meena',
        name: 'Meena Raut',
        role: 'Owner & Professional Beautician',
        image: '/images/staff/Meena.png',
        experience: '10+ Years',
        specialization: ['Bridal Makeup', 'Haircut Specialist', 'Skin Care'],
        certifications: ['Jawed Habib Certified', 'International Makeup Artist'],
        rating: 4.9,
        reviews: 500,
        availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        nextAvailable: 'Today 2:00 PM',
        popular: true,
        social: {
            instagram: 'https://www.instagram.com/meenaraut150880/'
        }
    },
    {
        id: 'mohini',
        name: 'Mohini Ghodke',
        role: 'Senior Hair Stylist',
        image: '/images/staff/Mohini.png',
        experience: '5+ Years',
        specialization: ['Hair Coloring', 'Keratin Treatment', 'Bridal Hair'],
        certifications: ["L'Oréal Professional Certified"],
        rating: 4.8,
        reviews: 280,
        availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        nextAvailable: 'Tomorrow 10:00 AM',
        popular: false,
        imagePosition: 'object-top',
    },
    {
        id: 'pratiksha',
        name: 'Pratiksha Dambare',
        role: 'Skin Care Specialist',
        image: '/images/staff/Pratiksha.png',
        experience: '3+ Years',
        specialization: ['Facial Treatments', 'Hydra Facials', 'Anti-Aging'],
        certifications: ['Dermalogica Certified'],
        rating: 4.9,
        reviews: 195,
        availability: ['Mon', 'Wed', 'Fri', 'Sat', 'Sun'],
        nextAvailable: 'Today 4:00 PM',
        popular: false,
    },
    {
        id: 'riya',
        name: 'Riya Kale',
        role: 'Nail Art & Mehendi Expert',
        image: '/images/staff/Riya.png',
        experience: '1+ Years',
        specialization: ['Nail Art', 'Mehendi Design', 'Manicure', 'Pedicure'],
        certifications: ['OPI Certified Nail Artist', 'Professional Mehendi Artist'],
        rating: 4.7,
        reviews: 150,
        availability: ['Tue', 'Thu', 'Sat', 'Sun'],
        nextAvailable: 'Saturday 11:00 AM',
        popular: false,
        imagePosition: 'object-top',
    },
]
