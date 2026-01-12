import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BackToTop } from '@/components/BackToTop';

function TestimonialsContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="후기"
          title=Wat Onze Leerlingen
          titleHighlight=Zeggen
          subtitle=Ontdek de ervaringen van onze leerlingen en hun families.
        />
        <TestimonialsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const TestimonialsPage = () => {
  return (
    <LanguageProvider>
      <TestimonialsContent />
    </LanguageProvider>
  );
};

export default TestimonialsPage;
