import { cn } from "../../lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children?: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  isLoading,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-lemon-500 text-forest-900 hover:bg-lemon-600 shadow-sm",
    secondary: "bg-sky-300 text-forest-900 hover:bg-sky-400 shadow-sm",
    outline:
      "border-2 border-dusk bg-transparent hover:bg-dusk hover:text-white text-forest-900",
    ghost: "hover:bg-slate-100 text-forest-900",
  };
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };
  return (
    <motion.button
      whileTap={{
        scale: 0.98,
      }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading ? (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : null}
      {children}
    </motion.button>
  );
}
