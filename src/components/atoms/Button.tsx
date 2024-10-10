interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button = ({
    label,
    onClick,
    disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      disabled={disabled}
      >
        {label}
    </button>
  )
}

export default Button
