import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  className?: string;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, description, children, footer, maxWidth = "2xl", className }, ref) => {
    if (!isOpen) return null;

    const maxWidthClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
    };

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      >
        <div 
          ref={ref}
          className={cn(
            "w-full rounded-2xl bg-white dark:bg-zinc-900 shadow-xl max-h-[90vh] overflow-y-auto",
            maxWidthClasses[maxWidth],
            className
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 pb-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {title}
                </h2>
                {description && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {description}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="rounded-xl p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <X className="h-5 w-5 text-zinc-500" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pb-8">
            {children}
          </div>

          {/* Footer */}
          {footer && (
            <div className="flex gap-3 px-8 pb-8 pt-2">
              {footer}
            </div>
          )}
        </div>
      </div>
    );
  }
)
Modal.displayName = "Modal"

export { Modal }
