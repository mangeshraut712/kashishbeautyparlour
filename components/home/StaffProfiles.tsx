'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Award, Heart, Instagram } from 'lucide-react'
import { staffMembers } from '@/lib/data/staff'

export default function StaffProfiles() {
    return (
        <section className="snap-section py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-primary/20 shadow-sm rounded-full mb-4">
                        <Heart className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                            Our Experts
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                        Meet Our <span className="gold-text">Team</span>
                    </h2>
                    <p className="text-gray-600 text-lg font-medium">
                        Certified professionals dedicated to making you look and feel beautiful
                    </p>
                </motion.div>

                {/* Staff Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staffMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-500">
                                {/* Image */}
                                <div className="relative h-72 overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className={`object-cover ${member.imagePosition || 'object-center'} group-hover:scale-110 transition-transform duration-700`}
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    {/* Experience Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full text-xs font-bold text-primary border border-primary/20">
                                        {member.experience}
                                    </div>

                                    {/* Popular Badge */}
                                    {member.popular && (
                                        <div className="absolute top-4 left-4 px-3 py-1 gold-gradient rounded-full text-xs font-bold text-black">
                                            ⭐ Top Rated
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-primary font-medium text-sm mb-3">
                                        {member.role}
                                    </p>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                            <span className="font-bold text-gray-900">{member.rating}</span>
                                        </div>
                                        <span className="text-gray-400 text-sm">({member.reviews} reviews)</span>
                                    </div>

                                    {/* Specializations */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {member.specialization.slice(0, 2).map((spec) => (
                                            <span
                                                key={spec}
                                                className="px-2 py-1 bg-white text-gray-600 text-xs rounded-full font-bold border border-gray-100 shadow-sm"
                                            >
                                                {spec}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Certifications */}
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mb-3">
                                        <Award className="w-4 h-4 text-primary" />
                                        {member.certifications[0]}
                                    </div>

                                    {/* Social Links */}
                                    {member.social?.instagram && (
                                        <a
                                            href={member.social.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-xs font-bold text-pink-500 hover:text-pink-600 transition-colors"
                                        >
                                            <Instagram className="w-4 h-4" />
                                            Follow on Instagram
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
