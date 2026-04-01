import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-300",
  ghost: "bg-transparent text-ink hover:bg-gray-100 focus-visible:outline-primary-300",
  outline:
    "border border-gray-300 bg-white text-ink hover:bg-gray-50 focus-visible:outline-primary-300"
};

const sizes = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-5 py-3 text-base"
};

export function Button({
  children,
  className,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
