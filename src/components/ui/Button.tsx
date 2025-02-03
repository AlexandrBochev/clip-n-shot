import { JSX } from "react"

export interface ButtonProps {
  key?: string
  noClick: () => void
  title?: string
  icon?: JSX.Element
  variant?: 'ghost' | 'primary'
}

const variants = {
  ghost: 'text-blue-500',
  primary: 'bg-blue-500 text-white'
}

const Button = ({ key, noClick, title, icon, variant }: ButtonProps) => {
  return (
    <button
      key={key}
      onClick={noClick}
      className={`
        flex items-center gap-x-2 px-4 py-2 font-semibold rounded cursor-pointer
        hover:scale-105 focus:outline-none focus:scale-105 active:scale-100 duration-150
        ${variants[variant || 'primary']}
      `}
    >
      {icon} {title}
    </button>
  )
}

export { Button }