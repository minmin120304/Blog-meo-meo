import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
};

export function Input({ className, error, label, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-ink">
      {label ? <span>{label}</span> : null}
      <input
        className={cn(
          "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-primary-400 focus:ring-2 focus:ring-primary-100",
          error && "border-red-300 focus:border-red-400 focus:ring-red-100",
          className
        )}
        {...props}
      />
      {error ? <span className="text-xs font-normal text-red-600">{error}</span> : null}
    </label>
  );
}
