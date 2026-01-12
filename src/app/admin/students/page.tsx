'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit, Trash2, UserPlus, Calendar } from 'lucide-react'
import { supabase, Student } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

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

const BELTS = ['Wit', 'Geel', 'Groen', 'Blauw', 'Rood', 'Zwart']

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingStudent, setEditingStudent] = useState<Student | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    birthdate: '',
    age: 0,
    address: '',
    postal_code: '',
    city: '',
    emergency_contact: '',
    emergency_phone: '',
    program: 'youth' as any,
    belt: 'Wit',
    location: 'Den Haag - Draaistraat' as any,
    join_date: new Date().toISOString().split('T')[0]
  })

  useEffect(() => {
    loadStudents()
  }, [])

  async function loadStudents() {
    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('name', { ascending: true })

      if (error) throw error
      setStudents(data || [])
    } catch (error) {
      console.error('Error loading students:', error)
      toast({ title: 'Fout', description: 'Kon leerlingen niet laden', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    try {
      if (editingStudent) {
        const { error } = await supabase
          .from('students')
          .update(formData)
          .eq('id', editingStudent.id)

        if (error) throw error
        toast({ title: 'Succes', description: 'Leerling bijgewerkt' })
      } else {
        const { error } = await supabase
          .from('students')
          .insert([formData])

        if (error) throw error
        toast({ title: 'Succes', description: 'Leerling toegevoegd' })
      }

      setDialogOpen(false)
      resetForm()
      loadStudents()
    } catch (error) {
      console.error('Error saving student:', error)
      toast({ title: 'Fout', description: 'Kon leerling niet opslaan', variant: 'destructive' })
    }
  }

  async function handleDelete(id: string) {
    if (!confirm('Weet je zeker dat je deze leerling wilt verwijderen?')) return

    try {
      const { error } = await supabase
        .from('students')
        .delete()
        .eq('id', id)

      if (error) throw error
      toast({ title: 'Succes', description: 'Leerling verwijderd' })
      loadStudents()
    } catch (error) {
      console.error('Error deleting student:', error)
      toast({ title: 'Fout', description: 'Kon leerling niet verwijderen', variant: 'destructive' })
    }
  }

  function openEditDialog(student: Student) {
    setEditingStudent(student)
    setFormData({
      name: student.name,
      email: student.email,
      phone: student.phone,
      password: student.password,
      birthdate: student.birthdate,
      age: student.age,
      address: student.address,
      postal_code: student.postal_code,
      city: student.city,
      emergency_contact: student.emergency_contact,
      emergency_phone: student.emergency_phone,
      program: student.program,
      belt: student.belt,
      location: student.location,
      join_date: student.join_date
    })
    setDialogOpen(true)
  }

  function resetForm() {
    setEditingStudent(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      password: '',
      birthdate: '',
      age: 0,
      address: '',
      postal_code: '',
      city: '',
      emergency_contact: '',
      emergency_phone: '',
      program: 'youth',
      belt: 'Wit',
      location: 'Den Haag - Draaistraat',
      join_date: new Date().toISOString().split('T')[0]
    })
  }

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <h1 className="text-3xl font-bold text-foreground">Leerlingen Beheer</h1>
          <p className="text-foreground/60 mt-2">{students.length} leerlingen geregistreerd</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={(open) => {
          setDialogOpen(open)
          if (!open) resetForm()
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Leerling Toevoegen
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingStudent ? 'Leerling Bewerken' : 'Nieuwe Leerling'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Naam *</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label>Email *</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Telefoon *</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label>Wachtwoord *</Label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Geboortedatum *</Label>
                  <Input
                    type="date"
                    value={formData.birthdate}
                    onChange={(e) => {
                      const birthdate = e.target.value
                      const age = new Date().getFullYear() - new Date(birthdate).getFullYear()
                      setFormData({ ...formData, birthdate, age })
                    }}
                    required
                  />
                </div>
                <div>
                  <Label>Leeftijd</Label>
                  <Input
                    type="number"
                    value={formData.age}
                    readOnly
                  />
                </div>
              </div>

              <div>
                <Label>Adres *</Label>
                <Input
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Postcode *</Label>
                  <Input
                    value={formData.postal_code}
                    onChange={(e) => setFormData({ ...formData, postal_code: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label>Stad *</Label>
                  <Input
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Noodcontact *</Label>
                  <Input
                    value={formData.emergency_contact}
                    onChange={(e) => setFormData({ ...formData, emergency_contact: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label>Noodcontact Telefoon *</Label>
                  <Input
                    value={formData.emergency_phone}
                    onChange={(e) => setFormData({ ...formData, emergency_phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Programma *</Label>
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
                  <Label>Band</Label>
                  <Select value={formData.belt} onValueChange={(value) => setFormData({ ...formData, belt: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {BELTS.map(b => (
                        <SelectItem key={b} value={b}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Locatie *</Label>
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
              </div>

              <div>
                <Label>Inschrijfdatum</Label>
                <Input
                  type="date"
                  value={formData.join_date}
                  onChange={(e) => setFormData({ ...formData, join_date: e.target.value })}
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                  Annuleren
                </Button>
                <Button type="submit">
                  {editingStudent ? 'Bijwerken' : 'Toevoegen'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        <Input
          placeholder="Zoek leerling op naam of email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
      </div>

      <div className="bg-background rounded-xl border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Naam</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Programma</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Band</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">Locatie</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-foreground uppercase tracking-wider">Acties</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-muted/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-foreground">{student.name}</div>
                    <div className="text-sm text-foreground/60">{student.age} jaar</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground/70">
                    {student.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {PROGRAMS.find(p => p.value === student.program)?.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground/70">
                    {student.belt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground/70">
                    {student.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex gap-2 justify-end">
                      <Button variant="outline" size="sm" onClick={() => openEditDialog(student)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(student.id)}>
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
