import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'
import { ScheduleSection } from '@/components/sections/ScheduleSection'
import { InstructorsSection } from '@/components/sections/InstructorsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { BackToTop } from '@/components/BackToTop'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <ScheduleSection />
      <InstructorsSection />
      <TestimonialsSection />
      <GallerySection />
      <PartnersSection />
      <FAQSection />
      <ContactSection />
      <BackToTop />
    </>
  )
}
