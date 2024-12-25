import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2, LucideIcon } from 'lucide-react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-[#004851] text-white hover:bg-[#003840] shadow-sm',
        outline: 'bg-white border border-[#004851] text-[#004851] hover:bg-gray-50 shadow-sm',
        danger: 'bg-red-500 text-white hover:bg-red-600 shadow-sm',
        'danger-outlined': 'bg-white border border-red-500 text-red-500 hover:bg-red-50 shadow-sm',
        ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
      },
      size: {
        default: 'h-8 px-3 text-sm',
        sm: 'h-7 px-2 text-xs',
        lg: 'h-9 px-4 text-base',
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
  loading?: boolean
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant, 
  size, 
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  children,
  ...props 
}) => {
  return (
    <button 
      className={buttonVariants({ variant, size, className })} 
      {...props}
      style={{ outline: 'none' }}
    >
      {loading && (
        <Loader2 className="w-4 h-4 ml-1 animate-spin" />
      )}
      {Icon && iconPosition === 'left' && !loading && (
        <Icon className="w-4 h-4 ml-1" />
      )}
      <span className='text-md'>
        {children}
      </span>
      {Icon && iconPosition === 'right' && !loading && (
        <Icon className="w-4 h-4 ml-1" />
      )}
    </button>
  )
}

