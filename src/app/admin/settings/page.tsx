'use client'

import { Settings, Database, Users, Bell } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Instellingen</h1>
        <p className="text-foreground/60 mt-2">Beheer systeem instellingen</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-background rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Database</h2>
          </div>
          <p className="text-foreground/60 text-sm">
            Supabase Project: zsibupsnbpnoxzjmnpcl
          </p>
        </div>

        <div className="bg-background rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Gebruikers</h2>
          </div>
          <p className="text-foreground/60 text-sm">
            Beheer admin gebruikers en toegangsrechten
          </p>
        </div>

        <div className="bg-background rounded-xl border border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Notificaties</h2>
          </div>
          <p className="text-foreground/60 text-sm">
            Configureer email notificaties voor ziekmeldingen
          </p>
        </div>
      </div>
    </div>
  )
}
