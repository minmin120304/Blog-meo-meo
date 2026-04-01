import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
  label?: string;
};

export function Textarea({ className, error, label, ...props }: TextareaProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-ink">
      {label ? <span>{label}</span> : null}
      <textarea
        className={cn(
          "min-h-32 w-full rounded-[1.6rem] border border-ink/10 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-ink/35 focus:border-primary-400 focus:ring-4 focus:ring-primary-100",
          error && "border-red-300 focus:border-red-400 focus:ring-red-100",
          className
        )}
        {...props}
      />
      {error ? <span className="text-xs font-normal text-red-600">{error}</span> : null}
    </label>
  );
}
