import { useLanguage } from '@/hooks/useLanguage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PricingSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const plans = [
    {
      name: t('Proefmaand', 'Trial Month'),
      price: '49',
      period: t('/eerste maand', '/first month'),
      description: t(
        'Perfect om Taekwondo te ontdekken zonder verplichting.',
        'Perfect to discover Taekwondo without commitment.'
      ),
      features: [
        t('Onbeperkt lessen volgen', 'Unlimited classes'),
        t('Leendobok (uniform)', 'Loaner dobok (uniform)'),
        t('Toegang tot alle programmas', 'Access to all programs'),
        t('Geen inschrijfkosten', 'No registration fee'),
      ],
      highlighted: false,
      cta: t('Start Proefmaand', 'Start Trial'),
    },
    {
      name: t('Basis Lidmaatschap', 'Basic Membership'),
      price: '65',
      period: t('/maand', '/month'),
      description: t(
        'Ideaal voor studenten die 2x per week willen trainen.',
        'Ideal for students who want to train twice a week.'
      ),
      features: [
        t('2 lessen per week', '2 classes per week'),
        t('Toegang tot basisprogrammas', 'Access to basic programs'),
        t('Bandexamens inbegrepen', 'Belt exams included'),
        t('Online lesmateriaal', 'Online training materials'),
        t('Maandelijks opzegbaar', 'Monthly cancellation'),
      ],
      highlighted: false,
      cta: t('Kies Basis', 'Choose Basic'),
    },
    {
      name: t('Premium Lidmaatschap', 'Premium Membership'),
      price: '89',
      period: t('/maand', '/month'),
      description: t(
        'Onze meest populaire optie voor toegewijde leerlingen.',
        'Our most popular option for dedicated students.'
      ),
      features: [
        t('Onbeperkt lessen per week', 'Unlimited classes per week'),
        t('Toegang tot alle programmas', 'Access to all programs'),
        t('Bandexamens inbegrepen', 'Belt exams included'),
        t('1 privéles per maand', '1 private lesson per month'),
        t('Wedstrijdtraining toegang', 'Competition training access'),
        t('10% korting sportwinkel', '10% equipment discount'),
        t('Prioriteit bij evenementen', 'Priority event registration'),
      ],
      highlighted: true,
      popular: true,
      cta: t('Kies Premium', 'Choose Premium'),
    },
    {
      name: t('Gezinslidmaatschap', 'Family Membership'),
      price: '149',
      period: t('/maand', '/month'),
      description: t(
        'Train samen als gezin met maximaal 4 leden.',
        'Train together as a family with up to 4 members.'
      ),
      features: [
        t('Tot 4 gezinsleden', 'Up to 4 family members'),
        t('Onbeperkt lessen voor iedereen', 'Unlimited classes for all'),
        t('Gezinslessen inbegrepen', 'Family classes included'),
        t('Alle bandexamens inbegrepen', 'All belt exams included'),
        t('Gedeelde privélessen', 'Shared private lessons'),
        t('15% korting sportwinkel', '15% equipment discount'),
      ],
      highlighted: false,
      cta: t('Kies Gezin', 'Choose Family'),
    },
  ];

  const extras = [
    {
      name: t('Privéles', 'Private Lesson'),
      price: '50',
      description: t('1-op-1 training met een instructeur', '1-on-1 training with an instructor'),
    },
    {
      name: t('Bandexamen (los)', 'Belt Exam (single)'),
      price: '35',
      description: t('Voor niet-leden of extra examens', 'For non-members or extra exams'),
    },
    {
      name: t('Wedstrijdpakket', 'Competition Package'),
      price: '25',
      period: t('/maand', '/month'),
      description: t('Extra training voor wedstrijdatleten', 'Extra training for competition athletes'),
    },
  ];

  return (
    <section className="section-padding bg-muted/30 relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Plans Grid */}
        <div className={cn(
          "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-700",
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

        {/* Bottom Note */}
        <div className={cn(
          "text-center mt-12 p-6 bg-card rounded-lg border border-border max-w-2xl mx-auto transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-muted-foreground text-sm mb-4">
            {t(
              'Alle prijzen zijn inclusief BTW. Jaarlijkse betalingen ontvangen 10% korting. Neem contact op voor bedrijfs- en groepstarieven.',
              'All prices include VAT. Annual payments receive 10% discount. Contact us for corporate and group rates.'
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
