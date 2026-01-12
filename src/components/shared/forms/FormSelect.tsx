import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export interface FormSelectOption {
  value: string;
  label: string;
}

export interface FormSelectProps {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  options: FormSelectOption[];
  className?: string;
}

const FormSelect = React.forwardRef<HTMLButtonElement, FormSelectProps>(
  ({ label, error, helperText, required, value, onValueChange, placeholder, options, className }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            label required && <span className="text-red-500">*</span>
          </label>
        )}
        <Select value=value onValueChange=onValueChange>
          <SelectTrigger 
            ref={ref}
            className=cn(
              "h-11 rounded-xl border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 focus:bg-white dark:focus:bg-zinc-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
              error && "border-red-500 focus:ring-red-500",
              className
            )
          >
            <SelectValue placeholder=placeholder />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            {options.map((option) => (
              <SelectItem key=option.value value=option.value>
                option.label
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && (
          <p className="text-sm text-red-500">error</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-zinc-500">helperText</p>
        )}
      </div>
    )
  }
)
FormSelect.displayName = "FormSelect"

export { FormSelect }
