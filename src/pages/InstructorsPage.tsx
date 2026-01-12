import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { InstructorsSection } from '@/components/sections/InstructorsSection';
import { BackToTop } from '@/components/BackToTop';

function InstructorsContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="사범"
          title={Onze}
          titleHighlight={Instructeurs}
          subtitle={Leer van wereldklasse meesters met decennia aan ervaring en kampioenschapskwalificaties.}
        />
        <InstructorsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const InstructorsPage = () => {
  return (
    <LanguageProvider>
      <InstructorsContent />
    </LanguageProvider>
  );
};

export default InstructorsPage;
