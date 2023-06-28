import "./index.css";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  onClick,
  children,
  className = "",
}: IButtonProps) {
  return (
    <button
      type="submit"
      className={`submit-btn ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
