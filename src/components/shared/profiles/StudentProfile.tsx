import * as React from "react"
import { X, Mail, Phone, MapPin, Calendar, Award, TrendingUp, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export interface StudentData {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  program: string;
  belt: string;
  location: string;
  attendance: number;
  lastClass: string;
  avatar?: string;
}

export interface StudentProfileProps {
  student: StudentData;
  onClose: () => void;
  programLabel?: string;
}

const StudentProfile = React.forwardRef<HTMLDivElement, StudentProfileProps>(
  ({ student, onClose, programLabel }, ref) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
        <div 
          ref={ref}
          className="w-full max-w-2xl rounded-2xl bg-white dark:bg-zinc-900 shadow-xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-xl p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Profile content */}
          <div className="px-8 pb-8">
            {/* Avatar and name */}
            <div className="flex items-end gap-4 -mt-16 mb-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl border-4 border-white dark:border-zinc-900 shadow-lg">
                {student.name.charAt(0)}
              </div>
              <div className="flex-1 pb-2">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                  {student.name}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {student.age} jaar • {programLabel || student.program}
                </p>
              </div>
            </div>

            {/* Info grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* Contact info */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                  Contact Informatie
                </h3>
                
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Email</p>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100 truncate">{student.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Telefoon</p>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{student.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Locatie</p>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{student.location}</p>
                  </div>
                </div>
              </div>

              {/* Training info */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                  Training Informatie
                </h3>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Band</p>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{student.belt}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Aanwezigheid</p>
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "h-2 w-2 rounded-full",
                        student.attendance >= 90 ? "bg-emerald-500" : 
                        student.attendance >= 75 ? "bg-blue-500" : "bg-red-500"
                      )} />
                      <p className="font-medium text-zinc-900 dark:text-zinc-100">{student.attendance}%</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Laatste Les</p>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{student.lastClass}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800/50 p-4 text-center">
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{student.attendance}%</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Aanwezigheid</p>
              </div>
              <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800/50 p-4 text-center">
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{student.belt}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Huidige Band</p>
              </div>
              <div className="rounded-xl bg-zinc-50 dark:bg-zinc-800/50 p-4 text-center">
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{student.age}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Leeftijd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
)
StudentProfile.displayName = "StudentProfile"

export { StudentProfile }
