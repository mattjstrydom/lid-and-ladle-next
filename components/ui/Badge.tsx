import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'sold-out' | 'default'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium',
        variant === 'sold-out' && 'bg-gray-800 text-white',
        variant === 'default' && 'bg-gray-100 text-gray-700',
        className
      )}
    >
      {children}
    </span>
  )
}
