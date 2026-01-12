import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { GallerySection } from '@/components/sections/GallerySection';
import { BackToTop } from '@/components/BackToTop';

function GalleryContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="갤러리"
          title={Foto}
          titleHighlight={Galerij}
          subtitle={Bekijk momenten van excellentie, toewijding en prestaties van onze gemeenschap.}
        />
        <GallerySection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const GalleryPage = () => {
  return (
    <LanguageProvider>
      <GalleryContent />
    </LanguageProvider>
  );
};

export default GalleryPage;
