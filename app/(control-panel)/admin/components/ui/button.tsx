import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"
  size?: "small" | "medium" | "large",
  color?: string
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", size = "medium", color, children, ...props }) => {
  const baseClasses = "font-medium rounded-lg focus:outline-none "

  const variantClasses = {
    primary: `${color ? `bg-[${color}]` : `bg-[#9c8a5a]`} hover:bg-[#8a795c] text-white`,
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  }

  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button

