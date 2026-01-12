'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit, Trash2, Clock, MapPin } from 'lucide-react'
import { supabase, Lesson } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const DAYS = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag']
const PROGRAMS = [
  { value: 'little-tigers', label: 'Kleine Tijgers' },
  { value: 'youth', label: 'Jeugd' },
  { value: 'women', label: 'Vrouwen' },
  { value: 'adult', label: 'Volwassenen' }
]
const LOCATIONS = [
  { value: 'Den Haag - Draaistraat', label: 'Den Haag - Draaistraat 16' },
  { value: 'Den Haag - Withuysstraat', label: 'Den Haag - Withuysstraat 2' }
]

export default function SchedulePage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    title: '',
    program: 'youth',
    location: 'Den Haag - Draaistraat',
    day_of_week: 1,
    start_time: '18:00',
    end_time: '19:00',
    max_students: 20,
    instructor: 'R. Ousllam',
    description: ''
  })

  useEffect(() => {
    loadLessons()
  }, [])

  async function loadLessons() {
    try {
      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .order('day_of_week', { ascending: true })
        .order('start_time', { ascending: true })

      if (error) throw error
      setLessons(data || [])
    } catch (error) {
      console.error('Error loading lessons:', error)
      toast({ title: 'Fout', description: 'Kon lessen niet laden', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    try {
      if (editingLesson) {
        const { error } = await supabase
          .from('lessons')
          .update(formData)
          .eq('id', editingLesson.id)

        if (error) throw error
        toast({ title: 'Succes', description: 'Les bijgewerkt' })
      } else {
        const { error } = await supabase
          .from('lessons')
          .insert([formData])

        if (error) throw error
        toast({ title: 'Succes', description: 'Les toegevoegd' })
      }

      setDialogOpen(false)
      resetForm()
      loadLessons()
    } catch (error) {
      console.error('Error saving lesson:', error)
      toast({ title: 'Fout', description: 'Kon les niet opslaan', variant: 'destructive' })
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Weet je zeker dat je deze les wilt verwijderen?')) return

    try {
      const { error } = await supabase
        .from('lessons')
        .delete()
        .eq('id', id)

      if (error) throw error
      toast({ title: 'Succes', description: 'Les verwijderd' })
      loadLessons()
    } catch (error) {
      console.error('Error deleting lesson:', error)
      toast({ title: 'Fout', description: 'Kon les niet verwijderen', variant: 'destructive' })
    }
  }

  function openEditDialog(lesson: Lesson) {
    setEditingLesson(lesson)
    setFormData({
      title: lesson.title,
      program: lesson.program,
      location: lesson.location,
      day_of_week: lesson.day_of_week,
      start_time: lesson.start_time,
      end_time: lesson.end_time,
      max_students: lesson.max_students || 20,
      instructor: lesson.instructor || 'R. Ousllam',
      description: lesson.description || ''
    })
    setDialogOpen(true)
  }

  function resetForm() {
    setEditingLesson(null)
    setFormData({
      title: '',
      program: 'youth',
      location: 'Den Haag - Draaistraat',
      day_of_week: 1,
      start_time: '18:00',
      end_time: '19:00',
      max_students: 20,
      instructor: 'R. Ousllam',
      description: ''
    })
  }

  const groupedLessons = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.day_of_week]) acc[lesson.day_of_week] = []
    acc[lesson.day_of_week].push(lesson)
    return acc
  }, {} as Record<number, Lesson[]>)

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
          <h1 className="text-3xl font-bold text-foreground">Rooster Beheer</h1>
          <p className="text-foreground/60 mt-2">Beheer het lesrooster</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={(open) => {
          setDialogOpen(open)
          if (!open) resetForm()
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Les Toevoegen
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingLesson ? 'Les Bewerken' : 'Nieuwe Les'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Titel</Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Taekwondo KIDS/JUGD"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Programma</Label>
                  <Select value={formData.program} onValueChange={(value: any) => setFormData({ ...formData, program: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PROGRAMS.map(p => (
                        <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Dag</Label>
                  <Select value={formData.day_of_week.toString()} onValueChange={(value) => setFormData({ ...formData, day_of_week: parseInt(value) })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {DAYS.map((day, i) => (
                        <SelectItem key={i} value={i.toString()}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Locatie</Label>
                <Select value={formData.location} onValueChange={(value: any) => setFormData({ ...formData, location: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {LOCATIONS.map(l => (
                      <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Tijd</Label>
                  <Input
                    type="time"
                    value={formData.start_time}
                    onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label>Eind Tijd</Label>
                  <Input
                    type="time"
                    value={formData.end_time}
                    onChange={(e) => setFormData({ ...formData, end_time: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Max Leerlingen</Label>
                  <Input
                    type="number"
                    value={formData.max_students}
                    onChange={(e) => setFormData({ ...formData, max_students: parseInt(e.target.value) })}
                    min="1"
                  />
                </div>
                <div>
                  <Label>Instructeur</Label>
                  <Input
                    value={formData.instructor}
                    onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label>Beschrijving</Label>
                <Input
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Extra informatie over de les"
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                  Annuleren
                </Button>
                <Button type="submit">
                  {editingLesson ? 'Bijwerken' : 'Toevoegen'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {DAYS.map((day, dayIndex) => {
          const dayLessons = groupedLessons[dayIndex] || []
          if (dayLessons.length === 0) return null

          return (
            <div key={dayIndex} className="bg-background rounded-xl border border-border p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">{day}</h2>
              <div className="space-y-3">
                {dayLessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-bold">{lesson.start_time} - {lesson.end_time}</span>
                        </div>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                          {PROGRAMS.find(p => p.value === lesson.program)?.label}
                        </span>
                      </div>
                      <p className="font-semibold text-foreground">{lesson.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4 text-foreground/60" />
                        <span className="text-sm text-foreground/60">{lesson.location}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => openEditDialog(lesson)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(lesson.id)}>
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
