import { Button, ButtonProps } from "./Button";

interface HeaderProps {
  logoUrl: string
  title: string
  buttons?: ButtonProps[]
}

const Header = ({ logoUrl, title, buttons }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center gap-y-4">
      <div className="flex items-center gap-x-2">
        {logoUrl && <img src={logoUrl} alt="Logo" />}
        <h1 className="text-xl font-semibold text-gray-600">{title}</h1>
      </div>
      {buttons && <nav className="flex items-center gap-x-4">
        {buttons?.map(button => (
          <Button
            key={button.key}
            title={button.title}
            noClick={button.noClick}
            icon={button.icon}
            variant={button.variant}
          />
        ))}
      </nav>}
    </header>
  )
}

export { Header }