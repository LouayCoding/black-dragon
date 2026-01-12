import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { FAQSection } from '@/components/sections/FAQSection';
import { BackToTop } from '@/components/BackToTop';

function FAQContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="질문"
          title={Veelgestelde}
          titleHighlight={Vragen}
          subtitle={Vind antwoorden op de meest gestelde vragen over onze school en trainingen.}
        />
        <FAQSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const FAQPage = () => {
  return (
    <LanguageProvider>
      <FAQContent />
    </LanguageProvider>
  );
};

export default FAQPage;
