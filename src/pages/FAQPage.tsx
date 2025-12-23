import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQSection } from '@/components/sections/FAQSection';

const FAQPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <FAQSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default FAQPage;
