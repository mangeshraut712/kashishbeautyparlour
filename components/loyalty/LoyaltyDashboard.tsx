'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Gift, TrendingUp, Award, Sparkles, History, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'

/**
 * Loyalty Points Dashboard - Full implementation
 * Shows user's loyalty points, rewards, and history
 */

// Mock user data - would come from auth/database
const mockUserData = {
    name: 'Priya',
    membershipTier: 'Gold',
    points: 2450,
    pointsToNextReward: 550,
    nextReward: 'Free Facial',
    totalSaved: 3500,
    referrals: 3,
    memberSince: 'Dec 2024',
}

const rewardTiers = [
    { points: 500, reward: 'Free Threading', icon: '✨' },
    { points: 1000, reward: 'Free Cleanup', icon: '🌟' },
    { points: 2000, reward: 'Free Hair Spa', icon: '💆' },
    { points: 3000, reward: 'Free Facial', icon: '✨' },
    { points: 5000, reward: 'Free Bridal Trial', icon: '👰' },
]

const earnPoints = [
    { action: 'Every ₹100 spent', points: '+10 points' },
    { action: 'Refer a friend', points: '+500 points' },
    { action: 'Birthday month visit', points: '+200 bonus' },
    { action: 'Write a review', points: '+50 points' },
    { action: 'Book online', points: '+25 points' },
]

const recentActivity = [
    { date: '28 Dec', action: 'Facial Treatment', points: '+150', type: 'earn' },
    { date: '25 Dec', action: 'Friend Referral', points: '+500', type: 'earn' },
    { date: '20 Dec', action: 'Redeemed Threading', points: '-500', type: 'redeem' },
    { date: '15 Dec', action: 'Hair Spa', points: '+200', type: 'earn' },
]

interface LoyaltyDashboardProps {
    isLoggedIn?: boolean
}

export default function LoyaltyDashboard({ isLoggedIn = false }: LoyaltyDashboardProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'rewards' | 'history'>('overview')

    const tierColors = {
        Silver: 'from-gray-400 to-gray-500',
        Gold: 'from-primary to-accent',
        Platinum: 'from-purple-600 to-indigo-600',
    }

    if (!isLoggedIn) {
        return (
            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Crown className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Join Our Rewards Program
                </h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Earn points on every visit, unlock exclusive rewards, and enjoy VIP benefits as a Kashish member.
                </p>
                <ul className="text-left max-w-sm mx-auto mb-8 space-y-3">
                    {earnPoints.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{item.action}</span>
                            <span className="font-bold text-primary">{item.points}</span>
                        </li>
                    ))}
                </ul>
                <Link
                    href="/contact?membership=true"
                    className="inline-flex items-center gap-2 px-8 py-4 gold-gradient text-black font-bold rounded-xl transition hover:shadow-lg"
                >
                    Join Now - It&apos;s Free!
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden"
        >
            {/* Header with Points */}
            <div className={`bg-gradient-to-r ${tierColors[mockUserData.membershipTier as keyof typeof tierColors]} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-white/80 text-sm">Welcome back,</p>
                        <h2 className="text-2xl font-heading font-bold">{mockUserData.name}!</h2>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
                        <Crown className="w-5 h-5" />
                        <span className="font-bold">{mockUserData.membershipTier} Member</span>
                    </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-white/80">Your Points</span>
                        <span className="text-3xl font-bold">{mockUserData.points.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                        <div
                            className="bg-white rounded-full h-2 transition-all"
                            style={{ width: `${((mockUserData.points % 1000) / 1000) * 100}%` }}
                        />
                    </div>
                    <p className="text-sm text-white/80">
                        {mockUserData.pointsToNextReward} points to unlock: <span className="font-bold">{mockUserData.nextReward}</span>
                    </p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
                {(['overview', 'rewards', 'history'] as const).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-4 text-sm font-bold transition-colors ${activeTab === tab
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="p-6">
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-green-50 rounded-xl">
                                <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-green-700">₹{mockUserData.totalSaved.toLocaleString()}</p>
                                <p className="text-xs text-green-600">Total Saved</p>
                            </div>
                            <div className="text-center p-4 bg-blue-50 rounded-xl">
                                <Gift className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-blue-700">{mockUserData.referrals}</p>
                                <p className="text-xs text-blue-600">Referrals</p>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-xl">
                                <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-purple-700">{mockUserData.memberSince}</p>
                                <p className="text-xs text-purple-600">Member Since</p>
                            </div>
                        </div>

                        {/* How to Earn */}
                        <div>
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-primary" />
                                Ways to Earn Points
                            </h4>
                            <div className="space-y-2">
                                {earnPoints.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                                        <span className="text-sm text-gray-600">{item.action}</span>
                                        <span className="text-sm font-bold text-primary">{item.points}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'rewards' && (
                    <div className="space-y-4">
                        {rewardTiers.map((tier, i) => {
                            const isUnlocked = mockUserData.points >= tier.points
                            return (
                                <div
                                    key={i}
                                    className={`flex items-center justify-between p-4 rounded-xl border ${isUnlocked ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{tier.icon}</span>
                                        <div>
                                            <p className="font-bold text-gray-900">{tier.reward}</p>
                                            <p className="text-xs text-gray-500">{tier.points} points</p>
                                        </div>
                                    </div>
                                    {isUnlocked ? (
                                        <button className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-lg">
                                            Redeem
                                        </button>
                                    ) : (
                                        <span className="text-sm text-gray-400">
                                            {tier.points - mockUserData.points} more
                                        </span>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="space-y-3">
                        {recentActivity.map((item, i) => (
                            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.type === 'earn' ? 'bg-green-100' : 'bg-red-100'
                                        }`}>
                                        <History className={`w-5 h-5 ${item.type === 'earn' ? 'text-green-600' : 'text-red-600'}`} />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{item.action}</p>
                                        <p className="text-xs text-gray-500">{item.date}</p>
                                    </div>
                                </div>
                                <span className={`font-bold ${item.type === 'earn' ? 'text-green-600' : 'text-red-600'}`}>
                                    {item.points}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    )
}
