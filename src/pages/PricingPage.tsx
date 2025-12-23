import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { PricingSection } from '@/components/sections/PricingSection';
import { BackToTop } from '@/components/BackToTop';

function PricingContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="가격"
          title={t('Lidmaatschap &', 'Membership &')}
          titleHighlight={t('Prijzen', 'Pricing')}
          subtitle={t(
            'Flexibele opties voor elke leerling. Begin vandaag nog met je Taekwondo reis.',
            'Flexible options for every student. Start your Taekwondo journey today.'
          )}
        />
        <PricingSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const PricingPage = () => {
  return (
    <LanguageProvider>
      <PricingContent />
    </LanguageProvider>
  );
};

export default PricingPage;
