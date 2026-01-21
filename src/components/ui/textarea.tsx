import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string | boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
  return (
    <div className="w-full">
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border bg-background px-4 py-2.5 text-base ring-offset-background",
          "placeholder:text-muted-foreground/70",
          "transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "resize-y",
          error
            ? "border-destructive focus-visible:ring-destructive"
            : "border-input focus-visible:ring-primary focus-visible:border-primary",
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
});
Textarea.displayName = "Textarea";

export { Textarea };




