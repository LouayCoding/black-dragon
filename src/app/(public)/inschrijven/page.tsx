'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Phone, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function InschrijvenPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    message: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: 'Velden ontbreken',
        description: 'Vul alle verplichte velden in.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Ongeldig e-mailadres',
        description: 'Voer een geldig e-mailadres in.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }

    try {
      const { supabase } = await import('@/lib/supabase')
      const { error } = await supabase
        .from('registrations')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          birth_date: formData.birthDate || null,
          parent_name: formData.parentName || null,
          parent_email: formData.parentEmail || null,
          parent_phone: formData.parentPhone || null,
          message: formData.message || null,
        }])

      if (error) throw error

      setIsSubmitted(true)
      toast({
        title: 'Inschrijving ontvangen!',
        description: 'We nemen zo snel mogelijk contact met je op.',
      })
    } catch (error) {
      console.error('Registration error:', error)
      toast({
        title: 'Er ging iets mis',
        description: 'Probeer het opnieuw of neem contact op via telefoon.',
        variant: 'destructive',
      })
    }
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Bedankt!
              </h1>
              <p className="text-foreground/70 text-lg leading-[1.8] max-w-2xl mx-auto">
                We hebben je aanmelding ontvangen en nemen binnen <strong className="text-foreground">24 uur</strong> contact met je op.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 lg:p-10 space-y-6 text-left">
              <h2 className="font-serif text-xl font-bold text-foreground text-center">Wat gebeurt er nu?</h2>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">1</span>
                  <span className="pt-1">We bellen je binnen 24 uur om kennis te maken</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">2</span>
                  <span className="pt-1">We plannen samen een proefles in</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">3</span>
                  <span className="pt-1">Je ontvangt een bevestiging per e-mail</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-foreground/50 text-sm">
                Vragen? Bel of WhatsApp ons direct:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button asChild variant="outline" size="lg" className="rounded-lg">
                  <a href="tel:+31615047993" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    06 15047993
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-lg">
                  <a href="https://wa.me/31615047993" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <Button asChild size="lg" variant="outline" className="rounded-lg">
              <Link href="/">Terug naar home</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-8">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              Inschrijven
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Schrijf je<br />
              <span className="text-primary">vandaag in</span>
            </h1>
            <p className="text-foreground/70 text-sm sm:text-base lg:text-lg leading-[1.8] max-w-2xl">
              Vul het formulier in en we nemen binnen 24 uur contact met je op.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Persoonlijke Gegevens */}
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                Persoonlijke Gegevens
              </h2>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Voornaam *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Bijv. Ahmed"
                    className="h-11"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Achternaam *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Bijv. van der Berg"
                    className="h-11"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mailadres *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jouw@email.nl"
                    className="h-11"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefoonnummer *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12345678"
                    className="h-11"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 max-w-xs">
                <Label htmlFor="birthDate">Geboortedatum</Label>
                <Input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="h-11"
                />
              </div>
            </div>

            {/* Ouder/Voogd */}
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-1">
                  Ouder/Voogd Gegevens
                </h2>
                <p className="text-xs text-foreground/50">
                  Alleen invullen indien de deelnemer jonger is dan 18 jaar
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="parentName">Naam ouder/voogd</Label>
                <Input
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Volledige naam"
                  className="h-11"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="parentEmail">E-mailadres ouder/voogd</Label>
                  <Input
                    id="parentEmail"
                    name="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={handleChange}
                    placeholder="ouder@email.nl"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentPhone">Telefoon ouder/voogd</Label>
                  <Input
                    id="parentPhone"
                    name="parentPhone"
                    type="tel"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    placeholder="06 12345678"
                    className="h-11"
                  />
                </div>
              </div>
            </div>

            {/* Opmerkingen */}
            <div className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                Opmerkingen
              </h2>
              <div className="space-y-2">
                <Label htmlFor="message">Heb je nog vragen of opmerkingen?</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Bijvoorbeeld specifieke wensen, medische informatie, of vragen..."
                  rows={4}
                  className="resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 text-base font-semibold rounded-lg"
              >
                {isSubmitting ? 'Verzenden...' : 'Inschrijven'}
              </Button>
              <p className="text-xs text-foreground/50">
                * Verplichte velden
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
