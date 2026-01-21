'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Phone, Mail, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/lib/utils'

export function RegisterSection() {
  const { ref, isVisible } = useScrollReveal()
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

    // Validatie
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: 'Velden ontbreken',
        description: 'Vul alle verplichte velden in.',
        variant: 'destructive',
      })
      setIsSubmitting(false)
      return
    }

    // Email validatie
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

    // Simuleer API call - in productie zou dit naar een backend gaan
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Sla op in localStorage voor demo doeleinden
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]')
    registrations.push({
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    })
    localStorage.setItem('registrations', JSON.stringify(registrations))

    setIsSubmitted(true)
    setIsSubmitting(false)

    toast({
      title: 'Inschrijving ontvangen! 🥋',
      description: 'We nemen zo snel mogelijk contact met je op.',
    })
  }

  if (isSubmitted) {
    return (
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Bedankt voor je inschrijving!
            </h1>
            
            <p className="text-foreground/70 text-sm sm:text-base lg:text-lg leading-relaxed">
              We hebben je aanmelding ontvangen en zullen binnen <strong>24 uur</strong> contact met je opnemen 
              om je gratis proefles in te plannen.
            </p>

            <div className="bg-muted/30 rounded-lg p-8 space-y-4">
              <h2 className="font-semibold text-lg">Wat gebeurt er nu?</h2>
              <ul className="text-left space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">1.</span>
                  <span>We bellen je binnen 24 uur om kennis te maken</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">2.</span>
                  <span>We plannen samen een gratis proefles in</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-semibold">3.</span>
                  <span>Je ontvangt een bevestiging per e-mail</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-foreground/60">
                Vragen? Neem direct contact met ons op:
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild variant="outline">
                  <a href="tel:+31615047993" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    06 15047993
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://wa.me/31615047993" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="pt-8">
              <Button asChild size="lg">
                <Link href="/">Terug naar home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-muted/30">
      <div ref={ref} className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Inschrijven
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Start je<br />
              <span className="text-primary">Taekwondo</span> reis
            </h1>
            <div className="space-y-6 max-w-2xl">
              <p className="text-foreground/90 text-sm sm:text-base lg:text-lg leading-[1.8]">
                Vul het formulier in en ontvang een <strong>gratis proefles</strong>. 
                We nemen binnen 24 uur contact met je op.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={cn(
          "space-y-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Persoonlijke Gegevens */}
          <div className="bg-card rounded-lg p-8 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Persoonlijke Gegevens
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Voornaam *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Bijv. Ahmed"
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
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mailadres *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jouw@email.nl"
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
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="birthDate">Geboortedatum</Label>
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Ouder/Voogd Info (voor kinderen) */}
          <div className="bg-card rounded-lg p-8 space-y-6">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Ouder/Voogd Gegevens
              </h2>
              <p className="text-sm text-foreground/60">
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
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="parentEmail">E-mailadres ouder/voogd</Label>
                <Input
                  id="parentEmail"
                  name="parentEmail"
                  type="email"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  placeholder="ouder@email.nl"
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
                />
              </div>
            </div>
          </div>

          {/* Aanvullende Informatie */}
          <div className="bg-card rounded-lg p-8 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Aanvullende Informatie
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
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background px-12 font-semibold"
            >
              {isSubmitting ? 'Verzenden...' : 'Gratis Proefles Aanvragen'}
            </Button>
            
            <p className="text-sm text-foreground/60 text-center sm:text-right">
              * Verplichte velden
            </p>
          </div>
        </form>

        {/* Contact Info */}
        <div className={cn(
          "mt-16 pt-16 border-t border-border transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="text-center space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Of neem direct contact op
            </h3>
            
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <a
                href="tel:+31615047993"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>06 15047993</span>
              </a>
              
              <a
                href="mailto:info@taekwondoblackdragon.nl"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@taekwondoblackdragon.nl</span>
              </a>
              
              <a
                href="https://wa.me/31615047993"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
