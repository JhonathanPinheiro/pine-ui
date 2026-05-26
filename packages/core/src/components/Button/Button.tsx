import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/cn'
import type { ButtonProps } from './Button.types'

const Spinner = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeDasharray="24" strokeDashoffset="8">
      <animateTransform attributeName="transform" type="rotate"
        from="0 7 7" to="360 7 7" dur="0.7s" repeatCount="indefinite" />
    </circle>
  </svg>
)

const buttonVariants = cva(
  // classes base — aplicadas em TODAS as variantes
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium rounded-[var(--radius-md)]',
    'border transition-all duration-150',
    'focus-visible:outline-none focus-visible:ring-2',
    'focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-40',
    'select-none whitespace-nowrap cursor-pointer',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-[var(--color-brand)] text-[var(--color-text-on-brand)]',
          'border-[var(--color-brand)]',
          'hover:bg-[var(--color-brand-hover)]',
          'hover:shadow-[var(--shadow-pine)]',
          'shadow-[var(--shadow-sm)]',
        ],
        secondary: [
          'bg-[var(--color-surface)] text-[var(--color-text)]',
          'border-[var(--color-border)]',
          'hover:bg-[var(--color-surface-hover)]',
          'hover:border-[var(--color-border-strong)]',
          'shadow-[var(--shadow-sm)]',
        ],
        ghost: [
          'bg-transparent text-[var(--color-text-secondary)]',
          'border-transparent',
          'hover:bg-[var(--color-surface-hover)]',
          'hover:text-[var(--color-text)]',
        ],
        danger: [
          'bg-[var(--color-danger)] text-white',
          'border-[var(--color-danger)]',
          'hover:bg-[var(--color-danger-hover)]',
          'shadow-[var(--shadow-sm)]',
        ],
        link: [
          'bg-transparent text-[var(--color-brand)]',
          'border-transparent',
          'hover:underline underline-offset-4',
          'px-0 h-auto',
        ],
      },
      size: {
        small: 'h-7  px-2.5 text-xs',
        medium: 'h-8  px-3   text-sm',
        large: 'h-9  px-4   text-sm',
      },
      fullWidth: {
        true:  'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant:   'primary',
      size:      'medium',
      fullWidth: false,
    },
  }
)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, fullWidth, loading, leftIcon, rightIcon,
     disabled, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}
      >
        {loading && <Spinner />}
        {!loading && leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'