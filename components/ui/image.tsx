import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends React.ComponentProps<typeof Image> {
    className?: string
}

export function OptimizedImage({ className, alt, ...props }: OptimizedImageProps) {
    return (
        <div className={cn("relative overflow-hidden", className)}>
            <Image
                alt={alt}
                className="object-cover transition-all duration-300 hover:scale-105"
                {...props}
            />
        </div>
    )
}

interface BackgroundImageProps {
    src: string
    alt: string
    className?: string
    children?: React.ReactNode
}

export function BackgroundImage({ src, alt, className, children }: BackgroundImageProps) {
    return (
        <div className={cn("relative overflow-hidden", className)}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover -z-10"
                quality={90}
            />
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    )
}

interface AvatarImageProps {
    src: string
    alt: string
    className?: string
}

export function AvatarImage({ src, alt, className }: AvatarImageProps) {
    return (
        <div className={cn("relative rounded-full overflow-hidden border-2 border-primary/20", className)}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
            />
        </div>
    )
}
