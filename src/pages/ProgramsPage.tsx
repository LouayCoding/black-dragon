import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProgramsSection } from '@/components/sections/ProgramsSection';

const ProgramsPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <ProgramsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default ProgramsPage;
