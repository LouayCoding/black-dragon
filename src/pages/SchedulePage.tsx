import { LanguageProvider } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScheduleSection } from '@/components/sections/ScheduleSection';

const SchedulePage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <ScheduleSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default SchedulePage;
