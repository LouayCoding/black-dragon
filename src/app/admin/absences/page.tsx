'use client'

import { useEffect, useState } from 'react'
import { Calendar, User, FileText } from 'lucide-react'
import { supabase, Attendance, Student } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface AbsenceWithStudent extends Attendance {
  student?: Student
}

export default function AbsencesPage() {
  const [absences, setAbsences] = useState<AbsenceWithStudent[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const { toast } = useToast()

  useEffect(() => {
    loadAbsences()
  }, [filter])

  async function loadAbsences() {
    try {
      let query = supabase
        .from('attendance')
        .select('*, student:students(*)')
        .neq('status', 'present')
        .order('attendance_date', { ascending: false })

      if (filter === 'sick') {
        query = query.eq('status', 'absent-sick')
      } else if (filter === 'recent') {
        const weekAgo = new Date()
        weekAgo.setDate(weekAgo.getDate() - 7)
        query = query.gte('attendance_date', weekAgo.toISOString().split('T')[0])
      }

      const { data, error } = await query

      if (error) throw error
      setAbsences(data || [])
    } catch (error) {
      console.error('Error loading absences:', error)
      toast({ title: 'Fout', description: 'Kon ziekmeldingen niet laden', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      'absent-sick': 'Ziek',
      'absent-vacation': 'Vakantie',
      'absent-unauthorized': 'Ongeoorloofd',
      'absent-other': 'Anders'
    }
    return labels[status] || status
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'absent-sick': 'bg-red-100 text-red-800',
      'absent-vacation': 'bg-blue-100 text-blue-800',
      'absent-unauthorized': 'bg-orange-100 text-orange-800',
      'absent-other': 'bg-gray-100 text-gray-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Ziekmeldingen</h1>
          <p className="text-foreground/60 mt-2">{absences.length} afwezigheden geregistreerd</p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alle afwezigheden</SelectItem>
            <SelectItem value="sick">Alleen ziek</SelectItem>
            <SelectItem value="recent">Laatste 7 dagen</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {absences.length === 0 ? (
          <div className="bg-background rounded-xl border border-border p-12 text-center">
            <p className="text-foreground/60">Geen afwezigheden gevonden</p>
          </div>
        ) : (
          absences.map((absence) => (
            <div key={absence.id} className="bg-background rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      <span className="font-bold text-lg">{absence.student?.name || 'Onbekend'}</span>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(absence.status)}`}>
                      {getStatusLabel(absence.status)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-foreground/70">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(absence.attendance_date).toLocaleDateString('nl-NL', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>

                    {absence.student && (
                      <div className="text-foreground/70">
                        <span className="font-medium">Programma:</span>{' '}
                        {absence.student.program === 'little-tigers' && 'Kleine Tijgers'}
                        {absence.student.program === 'youth' && 'Jeugd'}
                        {absence.student.program === 'women' && 'Vrouwen'}
                        {absence.student.program === 'adult' && 'Volwassenen'}
                      </div>
                    )}
                  </div>

                  {absence.notes && (
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-foreground/60 mt-0.5" />
                        <p className="text-sm text-foreground/70">{absence.notes}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
