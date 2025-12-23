import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { InstructorsSection } from '@/components/sections/InstructorsSection';

const InstructorsPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <InstructorsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default InstructorsPage;
