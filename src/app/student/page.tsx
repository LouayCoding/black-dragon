'use client'

import { useState, useEffect } from 'react'
import { Calendar, User, LogOut, AlertCircle, CheckCircle } from 'lucide-react'
import { supabase, Student, Attendance } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

export default function StudentPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [student, setStudent] = useState<Student | null>(null)
  const [absences, setAbsences] = useState<Attendance[]>([])
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [absenceForm, setAbsenceForm] = useState({
    attendance_date: new Date().toISOString().split('T')[0],
    status: 'absent-sick' as const,
    notes: ''
  })

  useEffect(() => {
    const savedStudent = localStorage.getItem('student')
    if (savedStudent) {
      const studentData = JSON.parse(savedStudent)
      setStudent(studentData)
      setIsLoggedIn(true)
      loadAbsences(studentData.id)
    }
  }, [])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('email', loginData.email)
        .eq('password', loginData.password)
        .single()

      if (error || !data) {
        toast({ title: 'Fout', description: 'Ongeldige inloggegevens', variant: 'destructive' })
        return
      }

      setStudent(data)
      setIsLoggedIn(true)
      localStorage.setItem('student', JSON.stringify(data))
      loadAbsences(data.id)
      toast({ title: 'Succes', description: 'Welkom terug!' })
    } catch (error) {
      console.error('Login error:', error)
      toast({ title: 'Fout', description: 'Er ging iets mis', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  async function loadAbsences(studentId: string) {
    try {
      const { data, error } = await supabase
        .from('attendance')
        .select('*')
        .eq('student_id', studentId)
        .neq('status', 'present')
        .order('attendance_date', { ascending: false })
        .limit(10)

      if (error) throw error
      setAbsences(data || [])
    } catch (error) {
      console.error('Error loading absences:', error)
    }
  }

  async function handleAbsenceSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!student) return

    setLoading(true)
    try {
      const { error } = await supabase
        .from('attendance')
        .insert([{
          student_id: student.id,
          ...absenceForm
        }])

      if (error) throw error

      toast({ title: 'Succes', description: 'Ziekmelding verstuurd' })
      setAbsenceForm({
        attendance_date: new Date().toISOString().split('T')[0],
        status: 'absent-sick',
        notes: ''
      })
      loadAbsences(student.id)
    } catch (error) {
      console.error('Error submitting absence:', error)
      toast({ title: 'Fout', description: 'Kon ziekmelding niet versturen', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  function handleLogout() {
    setIsLoggedIn(false)
    setStudent(null)
    setAbsences([])
    localStorage.removeItem('student')
    toast({ title: 'Uitgelogd', description: 'Tot ziens!' })
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <div className="bg-background rounded-xl border border-border p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <img src="/logo.png" alt="Logo" className="h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground">Leerling Portal</h1>
            <p className="text-foreground/60 mt-2">Log in om je ziek te melden</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                placeholder="jouw@email.nl"
                required
              />
            </div>

            <div>
              <Label>Wachtwoord</Label>
              <Input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Bezig...' : 'Inloggen'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-primary hover:underline">
              Terug naar website
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-12" />
            <div>
              <h1 className="font-bold text-lg">{student?.name}</h1>
              <p className="text-sm text-foreground/60">{student?.email}</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Uitloggen
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-6">
          <div className="bg-background rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Ziekmelding Indienen</h2>
            <form onSubmit={handleAbsenceSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Datum</Label>
                  <Input
                    type="date"
                    value={absenceForm.attendance_date}
                    onChange={(e) => setAbsenceForm({ ...absenceForm, attendance_date: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label>Reden</Label>
                  <Select 
                    value={absenceForm.status} 
                    onValueChange={(value: any) => setAbsenceForm({ ...absenceForm, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="absent-sick">Ziek</SelectItem>
                      <SelectItem value="absent-vacation">Vakantie</SelectItem>
                      <SelectItem value="absent-other">Anders</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Notitie (optioneel)</Label>
                <Textarea
                  value={absenceForm.notes}
                  onChange={(e) => setAbsenceForm({ ...absenceForm, notes: e.target.value })}
                  placeholder="Extra informatie over je afwezigheid..."
                  rows={3}
                />
              </div>

              <Button type="submit" disabled={loading}>
                {loading ? 'Bezig...' : 'Ziekmelding Versturen'}
              </Button>
            </form>
          </div>

          <div className="bg-background rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Mijn Ziekmeldingen</h2>
            
            {absences.length === 0 ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <p className="text-foreground/60">Geen ziekmeldingen</p>
              </div>
            ) : (
              <div className="space-y-3">
                {absences.map((absence) => (
                  <div key={absence.id} className="p-4 rounded-lg border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">
                          {new Date(absence.attendance_date).toLocaleDateString('nl-NL', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                        {absence.status === 'absent-sick' && 'Ziek'}
                        {absence.status === 'absent-vacation' && 'Vakantie'}
                        {absence.status === 'absent-other' && 'Anders'}
                      </span>
                    </div>
                    {absence.notes && (
                      <p className="text-sm text-foreground/70 mt-2">{absence.notes}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-background rounded-xl border border-border p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Mijn Gegevens</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-foreground/60">Programma</p>
                <p className="font-medium">
                  {student?.program === 'little-tigers' && 'Kleine Tijgers'}
                  {student?.program === 'youth' && 'Jeugd'}
                  {student?.program === 'women' && 'Vrouwen'}
                  {student?.program === 'adult' && 'Volwassenen'}
                </p>
              </div>
              <div>
                <p className="text-foreground/60">Band</p>
                <p className="font-medium">{student?.belt}</p>
              </div>
              <div>
                <p className="text-foreground/60">Locatie</p>
                <p className="font-medium">{student?.location}</p>
              </div>
              <div>
                <p className="text-foreground/60">Lid sinds</p>
                <p className="font-medium">
                  {student?.join_date && new Date(student.join_date).toLocaleDateString('nl-NL')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
