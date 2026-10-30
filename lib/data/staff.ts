// Centralized staff data used across StaffProfiles and StaffSelection
export interface StaffMember {
    id: string
    name: string
    role: string
    image: string
    experience: string
    specialization: string[]
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
        imagePosition: 'object-top',
    },
    {
        id: 'pratiksha',
        name: 'Pratiksha Dambare',
        role: 'Skin Care Specialist',
        image: '/images/staff/Pratiksha.png',
        experience: '3+ Years',
        specialization: ['Facial Treatments', 'Hydra Facials', 'Anti-Aging'],
    },
    {
        id: 'riya',
        name: 'Riya Kale',
        role: 'Nail Art & Mehendi Expert',
        image: '/images/staff/Riya.png',
        experience: '1+ Years',
        specialization: ['Nail Art', 'Mehendi Design', 'Manicure', 'Pedicure'],
        imagePosition: 'object-top',
    },
]
