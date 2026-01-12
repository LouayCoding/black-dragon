import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
  ({ title, description, children, className }, ref) => {
    return (
      <div ref={ref} className=cn("space-y-4", className)>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            title
          </h3>
          {description && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              description
            </p>
          )}
        </div>
        children
      </div>
    )
  }
)
FormSection.displayName = "FormSection"

export { FormSection }
