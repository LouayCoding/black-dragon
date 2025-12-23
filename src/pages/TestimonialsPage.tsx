import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

const TestimonialsPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default TestimonialsPage;
