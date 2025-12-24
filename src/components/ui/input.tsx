import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  error?: string | boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-11 w-full rounded-md border bg-background px-4 py-2.5 text-base ring-offset-background",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
            "placeholder:text-muted-foreground/70",
            "transition-colors duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error
              ? "border-destructive focus-visible:ring-destructive"
              : "border-input focus-visible:ring-ring",
            className,
          )}
          ref={ref}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
        {error && typeof error === "string" && (
          <p className="mt-1.5 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
