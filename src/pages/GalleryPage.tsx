import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GallerySection } from '@/components/sections/GallerySection';

const GalleryPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <GallerySection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default GalleryPage;
