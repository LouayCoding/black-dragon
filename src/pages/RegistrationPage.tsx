import { useLanguage } from '@/hooks/useLanguage';
import { RegistrationForm } from '@/components/RegistrationForm';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/BackToTop';
import { PageHero } from '@/components/PageHero';

export function RegistrationPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <PageHero
          koreanText="등록"
          title=Word
          titleHighlight=Lid
          subtitle=Start je Taekwondo reis vandaag. Vul het formulier in en ontvang een gratis proefles.
        />

        <div className="container mx-auto px-4 max-w-4xl py-20">
          <RegistrationForm />
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
