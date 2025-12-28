import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { RegistrationForm } from '@/components/RegistrationForm';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MembershipBenefits } from '@/components/shared/MembershipBenefits';

export function RegistrationPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-dark relative">
      <div className="absolute inset-0 korean-pattern opacity-[0.02]" />

      <div className="relative container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-korean-white/60 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('Terug', 'Back')}</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-korean-white mb-3">
            {t('🥋 Claim Je Gratis Proefles', '🥋 Claim Your Free Trial')}
          </h1>
          <p className="text-korean-white/70 text-base max-w-lg mx-auto">
            {t('Vul het formulier in en we nemen binnen 24 uur contact met je op', 'Fill out the form and we\'ll contact you within 24 hours')}
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 text-sm text-korean-white/60">
            <span>✓ {t('Gratis proefles', 'Free trial')}</span>
            <span>✓ {t('Geen verplichtingen', 'No obligations')}</span>
            <span>✓ {t('Direct antwoord', 'Quick response')}</span>
          </div>
        </div>

        {/* Membership Benefits */}
        <div className="mb-12">
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-korean-white text-center mb-8">
            {t('Waarom lid worden?', 'Why become a member?')}
          </h3>
          <MembershipBenefits variant="dark" className="max-w-5xl mx-auto" />
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-korean-black/30 rounded-lg border border-primary/20 p-6 md:p-8">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
