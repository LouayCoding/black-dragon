import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { BackToTop } from '@/components/BackToTop';
import { Shield, Users, Heart, AlertTriangle, Scale, Ban, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function CodeOfConductContent() {
  const { t } = useLanguage();

  const sections = [
    {
      icon: Shield,
      title: 1. ALGEMENE PRINCIPES,
      items: [
        {
          subtitle: Voorbeeldfunctie,
          text: t(
            'Ik ben mij bewust van mijn rol als voorbeeld voor zowel leden als collega\'s. Mijn gedrag moet altijd in lijn zijn met de vastgestelde huis- en gedragsregels.',
            'I am aware of my role as an example for both members and colleagues. My behavior must always be in line with the established house and conduct rules.'
          ),
        },
        {
          subtitle: Integriteit,
          text: Ik handel eerlijk, transparant en met respect naar iedereen toe. Ik bevestig hiermee de kernwaarden zoals eer, loyaliteit en trouw die in onze erecode zijn vastgelegd.,
        },
        {
          subtitle: Samenhang,
          text: Ik zorg ervoor dat mijn handelen en beslissingen altijd aansluiten bij de algemene huisregels, bijvoorbeeld dat vechten uitsluitend op de mat of in de ring gebeurt en dat technieken uitsluitend voor zelf- of ander verdediging worden ingezet.,
        },
      ],
    },
    {
      icon: Heart,
      title: 2. RESPECT EN SPORTIVITEIT,
      items: [
        {
          subtitle: Inclusiviteit,
          text: t(
            'Ik behandel alle leden, ouders en collega\'s gelijk en zonder discriminatie, zoals ook in de huisregels is opgenomen.',
            'I treat all members, parents and colleagues equally and without discrimination, as also included in the house rules.'
          ),
        },
        {
          subtitle: Fair Play,
          text: Ik stimuleer een sfeer van wederzijds respect en sportiviteit. Ongepast taalgebruik, beledigingen en pesten worden actief tegengegaan.,
        },
        {
          subtitle: Voorbeeldgedrag,
          text: Ik moedig leden aan om met respect en eerlijkheid om te gaan, zowel tijdens trainingen als in wedstrijden.,
        },
      ],
    },
    {
      icon: AlertTriangle,
      title: 3. VEILIGHEID EN GESCHIKTHEID,
      items: [
        {
          subtitle: Veilige Omgeving,
          text: Ik zorg voor een veilige trainingsomgeving, waarbij ik let op de staat van materialen en beschermingsmiddelen.,
        },
        {
          subtitle: Grenzen Respecteren,
          text: Zoals vastgelegd in de huisregels, gebruik ik technieken alleen op de mat of in de ring en enkel ter verdediging. Ik raak sporters enkel aan indien dit noodzakelijk is en op een professionele wijze.,
        },
        {
          subtitle: Preventie,
          text: Ik signaleer vroegtijdig situaties waarin de veiligheid van leden in het geding kan komen, zoals ongepast gedrag of het niet naleven van de regels rondom doping en het gebruik van stimulerende middelen.,
        },
      ],
    },
    {
      icon: Users,
      title: 4. GEDRAG TIJDENS TRAININGEN EN WEDSTRIJDEN,
      items: [
        {
          subtitle: Voorbereiding en Punctualiteit,
          text: Ik ben minimaal 15 minuten voor aanvang aanwezig en zorg dat trainingen gestructureerd en goed voorbereid verlopen.,
        },
        {
          subtitle: Regelbewaking,
          text: Ik zorg ervoor dat de huisregels, zoals het uitschakelen van mobiele telefoons tijdens trainingen en het gebruik van de juiste beschermingsmaterialen, strikt worden nageleefd.,
        },
        {
          subtitle: Directe Ingrijpen,
          text: Bij overtredingen, zoals het gebruik van onveilige materialen of het niet naleven van gedragsregels, grijp ik direct en gepast in.,
        },
      ],
    },
    {
      icon: CheckCircle,
      title: 5. PROFESSIONALITEIT EN COMMUNICATIE,
      items: [
        {
          subtitle: Constructieve Feedback,
          text: Ik geef opbouwende en respectvolle feedback aan sporters, zodat zij zich zowel technisch als persoonlijk kunnen ontwikkelen.,
        },
        {
          subtitle: Transparantie,
          text: Ik communiceer duidelijk met leden en ouders/verzorgers over regels, verwachtingen en eventuele (gedrags)problemen.,
        },
        {
          subtitle: Verantwoordelijkheid,
          text: Ik leg verantwoording af voor mijn handelen en neem mijn rol als handhaver van de huis- en gedragsregels serieus.,
        },
      ],
    },
    {
      icon: Ban,
      title: 6. DRUGS, ALCOHOL EN DOPING,
      items: [
        {
          subtitle: Nultolerantie,
          text: Ik maak geen gebruik van doping, stimulerende middelen, alcohol of tabak tijdens trainingen of wedstrijden.,
        },
        {
          subtitle: Preventie en Voorlichting,
          text: Ik waarschuw leden actief voor de gevaren van drugs en stimulerende middelen en zorg dat zij geïnformeerd zijn over een gezonde levensstijl, in lijn met de huisregels.,
        },
      ],
    },
    {
      icon: Scale,
      title: 7. HANDHAVING EN SANCTIES,
      items: [
        {
          subtitle: '',
          text: Het niet naleven van deze gedragscode of de algemene huis- en gedragsregels kan leiden tot passende sancties. Afhankelijk van de ernst van de overtreding worden de volgende maatregelen genomen:,
        },
      ],
    },
  ];

  const sanctions = [
    {
      number: '1',
      title: Mondelinge waarschuwing,
      description: Bij lichte overtredingen of eerste keren.,
    },
    {
      number: '2',
      title: Schriftelijke waarschuwing,
      description: Bij herhaalde of ernstigere overtredingen.,
    },
    {
      number: '3',
      title: Schorsing,
      description: Indien de overtredingen ernstige consequenties hebben voor de veiligheid of het imago van de vereniging.,
    },
    {
      number: '4',
      title: Beëindiging van de samenwerking,
      description: In geval van grensoverschrijdend gedrag of herhaaldelijk nalatig handelen.,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="규칙"
          title={Gedragscode}
          titleHighlight={Trainers & Begeleiders}
          subtitle={In aansluiting op de Huis- en Gedragsregels van Taekwondo Vereniging Black Dragon}
        />

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8">
                <p className="text-foreground/80 leading-relaxed">
                  {Taekwondo Vereniging Black Dragon heeft duidelijke huis- en gedragsregels opgesteld voor alle leden. Als trainer of begeleider draag jij een belangrijke verantwoordelijkheid om deze regels niet alleen na te leven, maar ook actief te handhaven en uit te dragen. Deze gedragscode is bedoeld als aanvulling op de bestaande regels en legt extra nadruk op jouw voorbeeldfunctie en professionele verantwoordelijkheid.}
                </p>
              </div>
            </motion.div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, sectionIndex) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={sectionIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    className="bg-card border border-border rounded-lg p-6 md:p-8"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex-1">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="pl-16">
                          {item.subtitle && (
                            <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                              {item.subtitle}
                            </h3>
                          )}
                          <p className="text-foreground/70 leading-relaxed">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Sanctions List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {sanctions.map((sanction, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{sanction.number}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{sanction.title}</h4>
                        <p className="text-sm text-foreground/70">{sanction.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-muted/50 border border-border rounded-lg p-6 md:p-8"
            >
              <p className="text-foreground/70 text-sm leading-relaxed italic">
                {Het bestuur van Taekwondo Vereniging Black Dragon behoudt zich het recht voor om in overleg met de betrokken partijen aanvullende maatregelen te treffen.}
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const CodeOfConductPage = () => {
  return (
    <LanguageProvider>
      <CodeOfConductContent />
    </LanguageProvider>
  );
};

export default CodeOfConductPage;
