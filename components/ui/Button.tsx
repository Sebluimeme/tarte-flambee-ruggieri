import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  size = "md",
  children,
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-sans font-medium transition-all";

  const sizeClasses =
    size === "sm" ? "px-5 py-2 text-sm" : "px-7 py-3.5 text-base";

  const variantClasses =
    variant === "primary"
      ? "bg-copper-500 text-cream-50 hover:bg-copper-400 shadow-sm hover:shadow-md"
      : "bg-transparent text-bark-900 border border-bark-900/15 hover:border-bark-900/30 hover:bg-cream-100";

  const classes = `${base} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
