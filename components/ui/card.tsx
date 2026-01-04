import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const cardVariants = cva(
    'rounded-[2rem] transition-all duration-500',
    {
        variants: {
            variant: {
                default: 'bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)] hover:border-primary/20',
                elevated: 'bg-white shadow-2xl border border-gray-100',
                glass: 'glass',
                dark: 'bg-luxury-dark text-white border border-white/10',
                outline: 'bg-transparent border-2 border-gray-200 hover:border-primary',
                ghost: 'bg-transparent hover:bg-gray-50',
            },
            padding: {
                none: 'p-0',
                sm: 'p-4',
                default: 'p-6 md:p-8',
                lg: 'p-8 md:p-12',
            },
        },
        defaultVariants: {
            variant: 'default',
            padding: 'default',
        },
    }
)

interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> { }

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, padding, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(cardVariants({ variant, padding, className }))}
            {...props}
        />
    )
)
Card.displayName = 'Card'

const CardHeader = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex flex-col space-y-2', className)}
        {...props}
    />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn('text-xl font-heading font-bold text-gray-900', className)}
        {...props}
    />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn('text-sm text-gray-500 font-medium', className)}
        {...props}
    />
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn('flex items-center pt-4 mt-4 border-t border-gray-100', className)}
        {...props}
    />
))
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
