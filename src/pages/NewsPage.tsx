import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { NewsSection } from '@/components/sections/NewsSection';
import { BackToTop } from '@/components/BackToTop';

function NewsContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="소식"
          title=Nieuws &
          titleHighlight=Evenementen
          subtitle=Blijf op de hoogte van het laatste nieuws, evenementen en successen van onze Taekwondo school.
        />
        <NewsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const NewsPage = () => {
  return (
    <LanguageProvider>
      <NewsContent />
    </LanguageProvider>
  );
};

export default NewsPage;
