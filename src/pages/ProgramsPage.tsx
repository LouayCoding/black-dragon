import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { BackToTop } from '@/components/BackToTop';

function ProgramsContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="프로그램"
          title=Onze
          titleHighlight=Programmas
          subtitle=Van kleine tijgers tot wedstrijdatleten - vind het perfecte programma voor jouw reis.
        />
        <ProgramsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const ProgramsPage = () => {
  return (
    <LanguageProvider>
      <ProgramsContent />
    </LanguageProvider>
  );
};

export default ProgramsPage;
