import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'primary' && 'bg-brand-primary text-white hover:opacity-90',
          variant === 'outline' &&
            'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
          variant === 'ghost' && 'text-brand-text hover:text-brand-primary',
          size === 'sm' && 'text-xs px-4 py-1.5',
          size === 'md' && 'text-sm px-6 py-2.5',
          size === 'lg' && 'text-base px-8 py-3',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
