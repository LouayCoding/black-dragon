import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { BackToTop } from '@/components/BackToTop';
import { Toaster } from '@/components/ui/sonner';

function ContactContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="연락"
          title={t('Neem', 'Get in')}
          titleHighlight={t('Contact Op', 'Touch')}
          subtitle={t(
            'Klaar om te beginnen? Neem contact op voor een gratis proefles.',
            'Ready to start? Contact us for a free trial class.'
          )}
        />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="top-right" />
    </div>
  );
}

const ContactPage = () => {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  );
};

export default ContactPage;
