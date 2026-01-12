import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { BackToTop } from '@/components/BackToTop';

function AboutContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="소개"
          title={Over}
          titleHighlight={Onze School}
          subtitle={Ontdek onze geschiedenis, waarden en toewijding aan authentiek Taekwondo onderwijs.}
        />
        <AboutSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const AboutPage = () => {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
};

export default AboutPage;
