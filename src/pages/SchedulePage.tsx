import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { ScheduleSection } from '@/components/sections/ScheduleSection';
import { BackToTop } from '@/components/BackToTop';

function ScheduleContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="일정"
          title={t('Les', 'Class')}
          titleHighlight={t('Rooster', 'Schedule')}
          subtitle={t(
            'Vind de perfecte lestijd die in je schema past met onze flexibele trainingsopties.',
            'Find the perfect class time that fits your schedule with our flexible training options.'
          )}
        />
        <ScheduleSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const SchedulePage = () => {
  return (
    <LanguageProvider>
      <ScheduleContent />
    </LanguageProvider>
  );
};

export default SchedulePage;
