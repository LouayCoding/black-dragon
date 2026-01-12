'use client'

import { useEffect, useState } from 'react'
import { Users, Calendar, AlertCircle, TrendingUp } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface DashboardStats {
  totalStudents: number
  activeStudents: number
  todayLessons: number
  pendingAbsences: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalStudents: 0,
    activeStudents: 0,
    todayLessons: 0,
    pendingAbsences: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [])

  async function loadStats() {
    try {
      const [studentsRes, lessonsRes, absencesRes] = await Promise.all([
        supabase.from('students').select('*', { count: 'exact' }),
        supabase.from('lessons').select('*').eq('day_of_week', new Date().getDay()).eq('is_active', true),
        supabase.from('attendance').select('*').eq('status', 'absent-sick').gte('attendance_date', new Date().toISOString().split('T')[0])
      ])

      setStats({
        totalStudents: studentsRes.count || 0,
        activeStudents: studentsRes.data?.filter(s => s.program).length || 0,
        todayLessons: lessonsRes.data?.length || 0,
        pendingAbsences: absencesRes.data?.length || 0
      })
    } catch (error) {
      console.error('Error loading stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      name: 'Totaal Leerlingen',
      value: stats.totalStudents,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Actieve Leerlingen',
      value: stats.activeStudents,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Lessen Vandaag',
      value: stats.todayLessons,
      icon: Calendar,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      name: 'Ziekmeldingen',
      value: stats.pendingAbsences,
      icon: AlertCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-foreground/60 mt-2">Welkom bij het Black Dragon admin panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-background rounded-xl border border-border p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-foreground/60 font-medium">{stat.name}</p>
                <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-background rounded-xl border border-border p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Snelle Acties</h2>
          <div className="space-y-3">
            <a href="/admin/students" className="block p-4 rounded-lg border border-border hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-medium">Leerlingen Beheren</span>
              </div>
            </a>
            <a href="/admin/schedule" className="block p-4 rounded-lg border border-border hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">Rooster Aanpassen</span>
              </div>
            </a>
            <a href="/admin/absences" className="block p-4 rounded-lg border border-border hover:bg-muted transition-colors">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">Ziekmeldingen Bekijken</span>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-background rounded-xl border border-border p-6">
          <h2 className="text-xl font-bold text-foreground mb-4">Recente Activiteit</h2>
          <div className="space-y-3">
            <p className="text-sm text-foreground/60">Geen recente activiteit</p>
          </div>
        </div>
      </div>
    </div>
  )
}
