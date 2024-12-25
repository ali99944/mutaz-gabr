import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

const tagVariants = cva(
  'inline-flex items-center rounded-full font-medium',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 text-gray-700',
        primary: 'bg-blue-50 text-blue-700',
        secondary: 'bg-purple-50 text-purple-700',
        success: 'bg-green-50 text-green-700',
        warning: 'bg-yellow-50 text-yellow-700',
        danger: 'bg-red-50 text-red-700',
      },
      size: {
        default: 'px-4 py-0.5 text-md',
        sm: 'px-2.5 py-0.5 text-md',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  text: string
  onRemove?: () => void
}

export const Tag: React.FC<TagProps> = ({ 
  className, 
  variant, 
  size, 
  text,
  onRemove,
  ...props 
}) => {
  return (
    <span className={tagVariants({ variant, size, className })} {...props}>
      {text}
      {onRemove && (
        <button
          type="button"
          className="ml-1.5 -mr-1 h-4 w-4 rounded-full inline-flex items-center justify-center hover:bg-black/10 hover:text-black/50"
          onClick={onRemove}
        >
          <X className="h-3.5 w-3.5" />
          <span className="sr-only">Remove</span>
        </button>
      )}
    </span>
  )
}

