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
      title: t('1. ALGEMENE PRINCIPES', '1. GENERAL PRINCIPLES'),
      items: [
        {
          subtitle: t('Voorbeeldfunctie', 'Role Model'),
          text: t(
            'Ik ben mij bewust van mijn rol als voorbeeld voor zowel leden als collega\'s. Mijn gedrag moet altijd in lijn zijn met de vastgestelde huis- en gedragsregels.',
            'I am aware of my role as an example for both members and colleagues. My behavior must always be in line with the established house and conduct rules.'
          ),
        },
        {
          subtitle: t('Integriteit', 'Integrity'),
          text: t(
            'Ik handel eerlijk, transparant en met respect naar iedereen toe. Ik bevestig hiermee de kernwaarden zoals eer, loyaliteit en trouw die in onze erecode zijn vastgelegd.',
            'I act honestly, transparently and with respect towards everyone. I hereby confirm the core values such as honor, loyalty and faithfulness that are laid down in our code of honor.'
          ),
        },
        {
          subtitle: t('Samenhang', 'Coherence'),
          text: t(
            'Ik zorg ervoor dat mijn handelen en beslissingen altijd aansluiten bij de algemene huisregels, bijvoorbeeld dat vechten uitsluitend op de mat of in de ring gebeurt en dat technieken uitsluitend voor zelf- of ander verdediging worden ingezet.',
            'I ensure that my actions and decisions always align with the general house rules, for example that fighting only takes place on the mat or in the ring and that techniques are only used for self-defense or defense of others.'
          ),
        },
      ],
    },
    {
      icon: Heart,
      title: t('2. RESPECT EN SPORTIVITEIT', '2. RESPECT AND SPORTSMANSHIP'),
      items: [
        {
          subtitle: t('Inclusiviteit', 'Inclusivity'),
          text: t(
            'Ik behandel alle leden, ouders en collega\'s gelijk en zonder discriminatie, zoals ook in de huisregels is opgenomen.',
            'I treat all members, parents and colleagues equally and without discrimination, as also included in the house rules.'
          ),
        },
        {
          subtitle: t('Fair Play', 'Fair Play'),
          text: t(
            'Ik stimuleer een sfeer van wederzijds respect en sportiviteit. Ongepast taalgebruik, beledigingen en pesten worden actief tegengegaan.',
            'I encourage an atmosphere of mutual respect and sportsmanship. Inappropriate language, insults and bullying are actively countered.'
          ),
        },
        {
          subtitle: t('Voorbeeldgedrag', 'Exemplary Behavior'),
          text: t(
            'Ik moedig leden aan om met respect en eerlijkheid om te gaan, zowel tijdens trainingen als in wedstrijden.',
            'I encourage members to act with respect and honesty, both during training and in competitions.'
          ),
        },
      ],
    },
    {
      icon: AlertTriangle,
      title: t('3. VEILIGHEID EN GESCHIKTHEID', '3. SAFETY AND SUITABILITY'),
      items: [
        {
          subtitle: t('Veilige Omgeving', 'Safe Environment'),
          text: t(
            'Ik zorg voor een veilige trainingsomgeving, waarbij ik let op de staat van materialen en beschermingsmiddelen.',
            'I ensure a safe training environment, paying attention to the condition of materials and protective equipment.'
          ),
        },
        {
          subtitle: t('Grenzen Respecteren', 'Respecting Boundaries'),
          text: t(
            'Zoals vastgelegd in de huisregels, gebruik ik technieken alleen op de mat of in de ring en enkel ter verdediging. Ik raak sporters enkel aan indien dit noodzakelijk is en op een professionele wijze.',
            'As stated in the house rules, I only use techniques on the mat or in the ring and only for defense. I only touch athletes when necessary and in a professional manner.'
          ),
        },
        {
          subtitle: t('Preventie', 'Prevention'),
          text: t(
            'Ik signaleer vroegtijdig situaties waarin de veiligheid van leden in het geding kan komen, zoals ongepast gedrag of het niet naleven van de regels rondom doping en het gebruik van stimulerende middelen.',
            'I identify early situations where the safety of members may be compromised, such as inappropriate behavior or non-compliance with rules regarding doping and the use of stimulants.'
          ),
        },
      ],
    },
    {
      icon: Users,
      title: t('4. GEDRAG TIJDENS TRAININGEN EN WEDSTRIJDEN', '4. BEHAVIOR DURING TRAINING AND COMPETITIONS'),
      items: [
        {
          subtitle: t('Voorbereiding en Punctualiteit', 'Preparation and Punctuality'),
          text: t(
            'Ik ben minimaal 15 minuten voor aanvang aanwezig en zorg dat trainingen gestructureerd en goed voorbereid verlopen.',
            'I am present at least 15 minutes before the start and ensure that training sessions are structured and well prepared.'
          ),
        },
        {
          subtitle: t('Regelbewaking', 'Rule Monitoring'),
          text: t(
            'Ik zorg ervoor dat de huisregels, zoals het uitschakelen van mobiele telefoons tijdens trainingen en het gebruik van de juiste beschermingsmaterialen, strikt worden nageleefd.',
            'I ensure that house rules, such as turning off mobile phones during training and using the correct protective materials, are strictly observed.'
          ),
        },
        {
          subtitle: t('Directe Ingrijpen', 'Direct Intervention'),
          text: t(
            'Bij overtredingen, zoals het gebruik van onveilige materialen of het niet naleven van gedragsregels, grijp ik direct en gepast in.',
            'In case of violations, such as the use of unsafe materials or non-compliance with conduct rules, I intervene immediately and appropriately.'
          ),
        },
      ],
    },
    {
      icon: CheckCircle,
      title: t('5. PROFESSIONALITEIT EN COMMUNICATIE', '5. PROFESSIONALISM AND COMMUNICATION'),
      items: [
        {
          subtitle: t('Constructieve Feedback', 'Constructive Feedback'),
          text: t(
            'Ik geef opbouwende en respectvolle feedback aan sporters, zodat zij zich zowel technisch als persoonlijk kunnen ontwikkelen.',
            'I provide constructive and respectful feedback to athletes so they can develop both technically and personally.'
          ),
        },
        {
          subtitle: t('Transparantie', 'Transparency'),
          text: t(
            'Ik communiceer duidelijk met leden en ouders/verzorgers over regels, verwachtingen en eventuele (gedrags)problemen.',
            'I communicate clearly with members and parents/guardians about rules, expectations and any (behavioral) problems.'
          ),
        },
        {
          subtitle: t('Verantwoordelijkheid', 'Responsibility'),
          text: t(
            'Ik leg verantwoording af voor mijn handelen en neem mijn rol als handhaver van de huis- en gedragsregels serieus.',
            'I am accountable for my actions and take my role as enforcer of the house and conduct rules seriously.'
          ),
        },
      ],
    },
    {
      icon: Ban,
      title: t('6. DRUGS, ALCOHOL EN DOPING', '6. DRUGS, ALCOHOL AND DOPING'),
      items: [
        {
          subtitle: t('Nultolerantie', 'Zero Tolerance'),
          text: t(
            'Ik maak geen gebruik van doping, stimulerende middelen, alcohol of tabak tijdens trainingen of wedstrijden.',
            'I do not use doping, stimulants, alcohol or tobacco during training or competitions.'
          ),
        },
        {
          subtitle: t('Preventie en Voorlichting', 'Prevention and Education'),
          text: t(
            'Ik waarschuw leden actief voor de gevaren van drugs en stimulerende middelen en zorg dat zij geïnformeerd zijn over een gezonde levensstijl, in lijn met de huisregels.',
            'I actively warn members about the dangers of drugs and stimulants and ensure they are informed about a healthy lifestyle, in line with the house rules.'
          ),
        },
      ],
    },
    {
      icon: Scale,
      title: t('7. HANDHAVING EN SANCTIES', '7. ENFORCEMENT AND SANCTIONS'),
      items: [
        {
          subtitle: '',
          text: t(
            'Het niet naleven van deze gedragscode of de algemene huis- en gedragsregels kan leiden tot passende sancties. Afhankelijk van de ernst van de overtreding worden de volgende maatregelen genomen:',
            'Failure to comply with this code of conduct or the general house and conduct rules may result in appropriate sanctions. Depending on the severity of the violation, the following measures will be taken:'
          ),
        },
      ],
    },
  ];

  const sanctions = [
    {
      number: '1',
      title: t('Mondelinge waarschuwing', 'Verbal warning'),
      description: t('Bij lichte overtredingen of eerste keren.', 'For minor violations or first offenses.'),
    },
    {
      number: '2',
      title: t('Schriftelijke waarschuwing', 'Written warning'),
      description: t('Bij herhaalde of ernstigere overtredingen.', 'For repeated or more serious violations.'),
    },
    {
      number: '3',
      title: t('Schorsing', 'Suspension'),
      description: t(
        'Indien de overtredingen ernstige consequenties hebben voor de veiligheid of het imago van de vereniging.',
        'If the violations have serious consequences for the safety or image of the association.'
      ),
    },
    {
      number: '4',
      title: t('Beëindiging van de samenwerking', 'Termination of cooperation'),
      description: t(
        'In geval van grensoverschrijdend gedrag of herhaaldelijk nalatig handelen.',
        'In case of transgressive behavior or repeated negligent actions.'
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="규칙"
          title={t('Gedragscode', 'Code of Conduct')}
          titleHighlight={t('Trainers & Begeleiders', 'Trainers & Supervisors')}
          subtitle={t(
            'In aansluiting op de Huis- en Gedragsregels van Taekwondo Vereniging Black Dragon',
            'In connection with the House and Conduct Rules of Taekwondo Association Black Dragon'
          )}
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
                  {t(
                    'Taekwondo Vereniging Black Dragon heeft duidelijke huis- en gedragsregels opgesteld voor alle leden. Als trainer of begeleider draag jij een belangrijke verantwoordelijkheid om deze regels niet alleen na te leven, maar ook actief te handhaven en uit te dragen. Deze gedragscode is bedoeld als aanvulling op de bestaande regels en legt extra nadruk op jouw voorbeeldfunctie en professionele verantwoordelijkheid.',
                    'Taekwondo Association Black Dragon has established clear house and conduct rules for all members. As a trainer or supervisor, you bear an important responsibility not only to comply with these rules, but also to actively enforce and promote them. This code of conduct is intended as a supplement to the existing rules and places extra emphasis on your role model function and professional responsibility.'
                  )}
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
                {t(
                  'Het bestuur van Taekwondo Vereniging Black Dragon behoudt zich het recht voor om in overleg met de betrokken partijen aanvullende maatregelen te treffen.',
                  'The board of Taekwondo Association Black Dragon reserves the right to take additional measures in consultation with the parties involved.'
                )}
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
