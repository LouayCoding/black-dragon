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
          title={t('Wat Onze Leerlingen', 'What Our Students')}
          titleHighlight={t('Zeggen', 'Say')}
          subtitle={t(
            'Ontdek de ervaringen van onze leerlingen en hun families.',
            'Discover the experiences of our students and their families.'
          )}
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
