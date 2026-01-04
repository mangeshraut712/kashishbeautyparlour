import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Link } from '@/i18n/routing'
import { forwardRef } from 'react'

/**
 * Modern Button component using CVA (Class Variance Authority)
 * Following 2025 component patterns with full variant support
 */
const buttonVariants = cva(
    // Base styles
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
    {
        variants: {
            variant: {
                default: 'gold-gradient text-black shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-105',
                secondary: 'bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm',
                outline: 'border-2 border-primary text-black hover:bg-primary hover:text-black',
                ghost: 'text-black hover:text-primary hover:bg-primary/5',
                dark: 'bg-luxury-dark text-black hover:bg-gray-800 shadow-lg',
                link: 'text-primary underline-offset-4 hover:underline p-0 h-auto',
            },
            size: {
                default: 'h-12 px-8 text-sm',
                sm: 'h-10 px-6 text-xs',
                lg: 'h-14 px-10 text-base',
                xl: 'h-16 px-12 text-lg',
                icon: 'h-12 w-12',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    href?: string
    isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, href, isLoading, children, disabled, ...props }, ref) => {
        const classes = cn(buttonVariants({ variant, size, className }))

        if (href) {
            return (
                <Link href={href} className={classes}>
                    {isLoading ? (
                        <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                    ) : null}
                    {children}
                </Link>
            )
        }

        return (
            <button
                ref={ref}
                className={classes}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading ? (
                    <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                ) : null}
                {children}
            </button>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
