import { useLanguage } from '@/hooks/useLanguage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MembershipBenefits } from '@/components/shared/MembershipBenefits';

export function PricingSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const plans = [
    {
      name: t('Basis', 'Basic'),
      price: '32,50',
      period: t('/maand', '/month'),
      description: t(
        'Ideaal voor beginners die 1x per week willen trainen.',
        'Ideal for beginners who want to train once a week.'
      ),
      features: [
        t('1x per week training', '1x per week training'),
        t('1x per jaar bandexamen', '1x per year belt exam'),
        t('Toegang tot basisprogramma', 'Access to basic program'),
        t('Online lesmateriaal', 'Online training materials'),
        t('Maandelijks opzegbaar', 'Monthly cancellation'),
      ],
      highlighted: false,
      cta: t('Kies Basis', 'Choose Basic'),
    },
    {
      name: t('Standaard', 'Standard'),
      price: t('TBN', 'TBD'),
      period: t('/maand', '/month'),
      description: t(
        'Onze meest populaire optie voor toegewijde leerlingen.',
        'Our most popular option for dedicated students.'
      ),
      features: [
        t('2x per week training', '2x per week training'),
        t('2x per jaar bandexamen', '2x per year belt exam'),
        t('Toegang tot alle programmas', 'Access to all programs'),
        t('Online lesmateriaal', 'Online training materials'),
        t('Maandelijks opzegbaar', 'Monthly cancellation'),
      ],
      highlighted: true,
      popular: true,
      cta: t('Kies Standaard', 'Choose Standard'),
    },
    {
      name: t('Intensief', 'Intensive'),
      price: '45',
      period: t('/maand', '/month'),
      description: t(
        'Voor serieuze atleten die maximale vooruitgang willen.',
        'For serious athletes who want maximum progress.'
      ),
      features: [
        t('3x per week training', '3x per week training'),
        t('Toegang tot alle programmas', 'Access to all programs'),
        t('Bandexamens inbegrepen', 'Belt exams included'),
        t('Wedstrijdtraining toegang', 'Competition training access'),
        t('Online lesmateriaal', 'Online training materials'),
        t('Prioriteit bij evenementen', 'Priority event registration'),
      ],
      highlighted: false,
      cta: t('Kies Intensief', 'Choose Intensive'),
    },
  ];

  const extras = [
    {
      name: t('Eenmalige Inschrijfkosten', 'One-time Registration Fee'),
      price: '30',
      period: undefined,
      description: t('Verplicht bij eerste inschrijving', 'Required upon first registration'),
    },
    {
      name: t('Privéles', 'Private Lesson'),
      price: '50',
      period: undefined,
      description: t('1-op-1 training met een instructeur', '1-on-1 training with an instructor'),
    },
    {
      name: t('Bandexamen (los)', 'Belt Exam (single)'),
      price: '35',
      period: undefined,
      description: t('Voor niet-leden of extra examens', 'For non-members or extra exams'),
    },
  ];

  return (
    <section className="section-padding bg-muted/30 relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Membership Benefits */}
        <div className={cn(
          "mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
            {t('Waarom lid worden?', 'Why become a member?')}
          </h3>
          <MembershipBenefits variant="default" />
        </div>

        {/* Plans Grid */}
        <div className={cn(
          "grid md:grid-cols-3 gap-6 mb-20 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative bg-card rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "border-primary shadow-lg ring-2 ring-primary/20"
                  : "border-border hover:border-primary/30 hover:shadow-lg"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    {t('Meest Populair', 'Most Popular')}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-foreground">€{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-3">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={cn(
                  "w-full",
                  plan.highlighted
                    ? "bg-primary hover:bg-accent text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                )}
              >
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Extra Options */}
        <div className={cn(
          "transition-all duration-700 delay-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
            {t('Extra Opties', 'Additional Options')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {extras.map((extra, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-5 text-center hover:border-primary/30 transition-colors"
              >
                <h4 className="font-semibold text-foreground mb-1">{extra.name}</h4>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-2xl font-bold text-primary">€{extra.price}</span>
                  {extra.period && <span className="text-muted-foreground text-sm">{extra.period}</span>}
                </div>
                <p className="text-muted-foreground text-sm">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ooievaarspas Section */}
        <div className={cn(
          "mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20 max-w-2xl mx-auto transition-all duration-700 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h3 className="font-serif text-xl font-semibold text-foreground text-center mb-3">
            {t('Ooievaarspas Houders', 'Ooievaarspas Holders')}
          </h3>
          <p className="text-muted-foreground text-sm text-center mb-4">
            {t(
              'Wij accepteren de Ooievaarspas! Profiteer van aantrekkelijke kortingen op onze lidmaatschappen.',
              'We accept the Ooievaarspas! Benefit from attractive discounts on our memberships.'
            )}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <p className="text-2xl font-bold text-primary mb-1">100%</p>
              <p className="text-sm text-muted-foreground">
                {t('Vergoeding onder 18 jaar', 'Reimbursement under 18 years')}
              </p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg border border-border">
              <p className="text-2xl font-bold text-primary mb-1">50%</p>
              <p className="text-sm text-muted-foreground">
                {t('Vergoeding boven 18 jaar', 'Reimbursement over 18 years')}
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button asChild>
              <a 
                href="https://ooievaarspas.nl/aanbiedingen/taekwondo-black-dragon/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('Bekijk op Ooievaarspas.nl', 'View on Ooievaarspas.nl')}
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className={cn(
          "text-center mt-12 p-6 bg-card rounded-lg border border-border max-w-2xl mx-auto transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-muted-foreground text-sm mb-4">
            {t(
              'Alle prijzen zijn inclusief BTW. Eenmalige inschrijfkosten van €30 zijn verplicht bij eerste aanmelding. Lidmaatschap TBN (Taekwondo Bond Nederland) wordt aanbevolen. Neem contact op voor meer informatie.',
              'All prices include VAT. One-time registration fee of €30 is required upon first sign-up. TBN (Taekwondo Bond Nederland) membership is recommended. Contact us for more information.'
            )}
          </p>
          <Button asChild variant="outline">
            <Link to="/contact">{t('Vragen? Neem Contact Op', 'Questions? Contact Us')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
