import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { ScheduleSection } from '@/components/sections/ScheduleSection';
import { InstructorsSection } from '@/components/sections/InstructorsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { BackToTop } from '@/components/BackToTop';
import { MobileCTA } from '@/components/MobileCTA';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <ScheduleSection />
          <InstructorsSection />
          <TestimonialsSection />
          <GallerySection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
        <MobileCTA />
        <Toaster position="top-right" />
      </div>
    </LanguageProvider>
  );
};

export default Index;
