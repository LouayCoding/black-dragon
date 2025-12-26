import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"

export interface DashboardButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
}

const DashboardButton = React.forwardRef<HTMLButtonElement, DashboardButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variantStyles = {
      primary: "rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors",
      secondary: "rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm transition-colors",
      ghost: "rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors",
      danger: "rounded-xl bg-red-600 hover:bg-red-700 text-white shadow-sm transition-colors",
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "h-11 font-medium",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    )
  }
)
DashboardButton.displayName = "DashboardButton"

export { DashboardButton }
