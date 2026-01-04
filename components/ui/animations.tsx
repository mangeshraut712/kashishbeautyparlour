'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
}

export const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
}

export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
}

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
}

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
    children: ReactNode
}

export const AnimatedSection = ({ children, className, ...props }: AnimatedSectionProps) => (
    <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
        className={className}
        {...props}
    >
        {children}
    </motion.section>
)

interface AnimatedDivProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: ReactNode
    className?: string
    delay?: number
}

export const AnimatedDiv = ({ children, className, delay = 0, ...props }: AnimatedDivProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
)

interface StaggerContainerProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: ReactNode
    className?: string
}

export const StaggerContainer = ({ children, className, ...props }: StaggerContainerProps) => (
    <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className={className}
        {...props}
    >
        {children}
    </motion.div>
)

interface StaggerItemProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
    children: ReactNode
    className?: string
}

export const StaggerItem = ({ children, className, ...props }: StaggerItemProps) => (
    <motion.div variants={staggerItem} className={className} {...props}>
        {children}
    </motion.div>
)

interface ParallaxWrapperProps {
    children: ReactNode
    className?: string
}

export const ParallaxWrapper = ({ children, className }: ParallaxWrapperProps) => (
    <div className={className}>{children}</div>
)
