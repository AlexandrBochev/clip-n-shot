import { Button, ButtonProps } from "./Button"

interface HeaderProps {
  logoUrl?: string
  title: string
  actions?: ButtonProps[]
}

const Header = ({ logoUrl, title, actions }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center gap-y-4">
      <div className="flex items-center gap-x-2">
        {logoUrl && <img src={logoUrl} alt="Logo" />}
        <h1 className="text-xl font-semibold text-gray-600">{title}</h1>
      </div>
      {actions &&
        <nav className="flex items-center gap-x-4">
          {actions?.map((button) => <Button {...button} />)}
        </nav>
      }
    </header>
  )
}

export { Header }