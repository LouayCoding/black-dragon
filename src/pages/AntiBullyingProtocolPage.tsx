import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { BackToTop } from '@/components/BackToTop';
import { Shield, Users, MessageCircle, AlertTriangle, Ban, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function AntiBullyingProtocolContent() {
  const { t } = useLanguage();

  const notAllowed = [
    t('Het beoordelen op uiterlijk, afkomst, geslacht of andere persoonskenmerken of het maken van kwetsende opmerkingen daarover.', 'Judging based on appearance, origin, gender or other personal characteristics or making hurtful comments about them.'),
    t('Ongewenst aan de spullen van een ander komen.', 'Unwanted touching of someone else\'s belongings.'),
    t('Een ander bewust hardhandig behandelen en/of fysiek pijn doen bij het oefenen.', 'Deliberately treating someone roughly and/or physically hurting them during practice.'),
    t('Elkaar met een bijnaam aanspreken die door de bedoelde persoon er van niet als positief ervaren wordt.', 'Addressing each other with a nickname that is not experienced as positive by the intended person.'),
    t('Vloeken of schelden, Roddelen.', 'Swearing or cursing, Gossiping.'),
  ];

  const expected = [
    t('Probeer ruzie altijd samen op te lossen.', 'Always try to resolve arguments together.'),
    t('Wanneer dit niet lukt: zoek contact met een trainer of vertrouwenscontactpersoon.', 'When this doesn\'t work: contact a trainer or confidential contact person.'),
    t('Luister aandachtig naar elkaar.', 'Listen carefully to each other.'),
    t('Help elkaar waar nodig.', 'Help each other where needed.'),
    t('Zorg dat nieuwkomers in de groep goed worden ontvangen en opgevangen.', 'Ensure that newcomers to the group are well received and supported.'),
  ];

  const solutionSteps = [
    t('Er wordt vastgesteld of de gepeste heeft geprobeerd het samen met de pester op te lossen.', 'It is determined whether the bullied person has tried to resolve it together with the bully.'),
    t('Als de gepeste er niet uitkomt grijpt de leraar/trainer in. Hij/zij brengt de partijen bij elkaar voor een verhelderingsgesprek en probeert samen met hen de ruzie of pesterijen op te lossen en (nieuwe) afspraken te maken.', 'If the bullied person cannot resolve it, the teacher/trainer intervenes. He/she brings the parties together for a clarification discussion and tries to resolve the argument or bullying together with them and make (new) agreements.'),
    t('Er wordt contact gezocht met de ouders van de partijen nadat de kinderen hierover ingelicht zijn. Eventueel wordt een gesprek gevoerd met de hele groep.', 'Contact is made with the parents of the parties after the children have been informed. A discussion may be held with the entire group.'),
    t('Hierin kan aan de orde komen wat de oorzaken en de gevolgen zijn voor slachtoffers, daders, meelopers en zwijgende middengroep. Besproken kan worden of ze zich realiseren welk verdriet zij veroorzaken met hun gedrag en/of houding.', 'This can address the causes and consequences for victims, perpetrators, followers and the silent middle group. It can be discussed whether they realize what sadness they cause with their behavior and/or attitude.'),
    t('Bij herhaaldelijke ruzie/pestgedrag neemt de trainer duidelijk stelling en houdt een bestraffend gesprek met de pester.', 'In case of repeated arguments/bullying behavior, the trainer takes a clear position and has a punitive conversation with the bully.'),
    t('De fase van bestraffen/sancties treedt in werking. Ook wordt de naam van de ruziemaker/pester vastgelegd in een verslag. Bij iedere melding omschrijft de trainer \'de toedracht\'.', 'The punishment/sanctions phase comes into effect. The name of the troublemaker/bully is also recorded in a report. With each report, the trainer describes \'the circumstances\'.'),
    t('De trainer en ouders proberen in goed overleg samen te werken aan een voor iedereen bevredigende oplossing. Als het gaat om jonge kinderen worden de ouders hier actief bij betrokken.', 'The trainer and parents try to work together in good consultation on a solution that is satisfactory for everyone. When it comes to young children, parents are actively involved.'),
  ];

  const firstSanctions = [
    t('Één training niet aanwezig zijn.', 'Not attending one training session.'),
    t('Voor een bepaald aantal trainingen: blijven tot de andere leden naar huis vertrokken zijn.', 'For a certain number of training sessions: stay until the other members have left.'),
    t('Afspraken maken met de pester over gedragsveranderingen. De naleving van deze afspraken komen aan het einde van iedere week (voor een periode) in een kort gesprek aan de orde.', 'Make agreements with the bully about behavioral changes. Compliance with these agreements is discussed in a short conversation at the end of each week (for a period).'),
  ];

  const followUpSanctions = [
    t('De ouders nadrukkelijker bij de oplossing betrekken. De club heeft een dossier bijgehouden van de acties die hebben plaatsgevonden. Dit dossier is uitgangspunt voor het gesprek.', 'Involve the parents more emphatically in the solution. The club has kept a file of the actions that have taken place. This file is the starting point for the conversation.'),
    t('Bij aanhoudend pestgedrag de pester voor een bepaalde periode schorsen.', 'In case of persistent bullying behavior, suspend the bully for a certain period.'),
  ];

  const finalSanction = t(
    'In extreme gevallen kan de pester geroyeerd worden van de club',
    'In extreme cases, the bully can be expelled from the club'
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="규칙"
          title={t('Pestprotocol', 'Anti-Bullying Protocol')}
          titleHighlight={t('Taekwondo Black Dragon', 'Taekwondo Black Dragon')}
          subtitle={t(
            'Hoe wij door gewenst gedrag te stimuleren pesten binnen de club trachten te voorkomen',
            'How we try to prevent bullying within the club by encouraging desired behavior'
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
                    'In dit document hebben we als Taekwondo vereniging Black Dragon vastgelegd hoe wij door gewenst gedrag te stimuleren pesten binnen de club trachten te voorkomen. Hierin zal behandeld worden hoe wij omgaan met situaties waarin dit toch gebeurt/dreigt te gebeuren en zal uitgewerkt worden welke sancties mogelijk zijn als een situatie niet tot een oplossing komt.',
                    'In this document, we as Taekwondo association Black Dragon have established how we try to prevent bullying within the club by encouraging desired behavior. This will cover how we deal with situations where this still happens/threatens to happen and will outline what sanctions are possible if a situation does not lead to a solution.'
                  )}
                </p>
              </div>
            </motion.div>

            {/* Section 1: Promoting Desired Behavior */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex-1">
                  {t('1. Gewenste omgang bevorderen', '1. Promoting Desired Behavior')}
                </h2>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {t(
                  'Het is erg belangrijk dat leden zich veilig voelen in hun sportomgeving. Hier hoort bij dat zij zich niet gepest mogen voelen. Om het risico daarop zo klein mogelijk te maken hebben we een aantal gedragsregels opgesteld.',
                  'It is very important that members feel safe in their sports environment. This includes that they should not feel bullied. To minimize the risk of this, we have established a number of behavioral rules.'
                )}
              </p>

              {/* Not Allowed */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Ban className="w-5 h-5 text-destructive" />
                  {t('Niet toegestaan:', 'Not allowed:')}
                </h3>
                <ul className="space-y-3">
                  {notAllowed.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground/70">
                      <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expected */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {t('Wel verwacht:', 'Expected:')}
                </h3>
                <ul className="space-y-3">
                  {expected.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground/70">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-foreground/70 italic">
                  {t(
                    'Bovenstaande gedragsregels worden al bij inschrijving kenbaar gemaakt aan al onze leden en zijn tevens op te vragen bij de trainers. Verder wordt er door de leraren/trainers regelmatig aandacht aan besteedt en zien wij toe op de naleving ervan tijdens de lessen. Bovendien wordt aan ouders/verzorgers ook gevraagd om ongewenst gedrag te melden wanneer zij dit tegenkomen of vermoeden.',
                    'The above behavioral rules are made known to all our members upon registration and can also be requested from the trainers. Furthermore, the teachers/trainers regularly pay attention to them and we monitor compliance during lessons. In addition, parents/guardians are also asked to report unwanted behavior when they encounter or suspect it.'
                  )}
                </p>
              </div>
            </motion.div>

            {/* Section 2: Resolving Bullying Situations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex-1">
                  {t('2. Situaties van pestgedrag oplossen', '2. Resolving Bullying Situations')}
                </h2>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {t(
                  'Als er een vermoeden bestaat dat er binnen de club gepest wordt dan worden de volgende stappen doorlopen:',
                  'If there is a suspicion that bullying is taking place within the club, the following steps are taken:'
                )}
              </p>

              <div className="space-y-4">
                {solutionSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed flex-1">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Section 3: Sanctions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex-1">
                  {t('3. Sancties', '3. Sanctions')}
                </h2>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-8">
                {t(
                  'Mochten pogingen tot verbetering van de situatie door leden, trainer en ouders niet tot een oplossing leiden dan kan de club overgaan tot het opleggen van sancties. Een besluit hiertoe volgt altijd uit samenspraak tussen trainer en bestuur. De mogelijke sancties lopen op van licht naar steeds zwaarder en kunnen in die volgorde worden gegeven als een situatie zich over langere tijd niet verbetert.',
                  'If attempts to improve the situation by members, trainer and parents do not lead to a solution, the club can proceed to impose sanctions. A decision to do so always follows from consultation between trainer and board. The possible sanctions range from light to increasingly severe and can be given in that order if a situation does not improve over a longer period of time.'
                )}
              </p>

              {/* First Sanctions */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  {t('Eerste sancties', 'First Sanctions')}
                </h3>
                <div className="space-y-3">
                  {firstSanctions.map((sanction, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <span className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-yellow-700 dark:text-yellow-400 font-bold text-xs">{index + 1}</span>
                      </span>
                      <p className="text-foreground/70 text-sm">{sanction}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow-up Sanctions */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  {t('Vervolgsancties', 'Follow-up Sanctions')}
                </h3>
                <div className="space-y-3">
                  {followUpSanctions.map((sanction, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                      <span className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-orange-700 dark:text-orange-400 font-bold text-xs">{index + 1}</span>
                      </span>
                      <p className="text-foreground/70 text-sm">{sanction}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Sanction */}
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  {t('Laatste sanctie', 'Final Sanction')}
                </h3>
                <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                  <p className="text-foreground font-medium flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>{finalSanction}</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted/50 border border-border rounded-lg p-6 md:p-8 text-center"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-foreground/70 text-sm leading-relaxed">
                {t(
                  'Bij Taekwondo Vereniging Black Dragon streven we naar een veilige en respectvolle omgeving voor alle leden. Dit protocol helpt ons om deze waarden te handhaven.',
                  'At Taekwondo Association Black Dragon, we strive for a safe and respectful environment for all members. This protocol helps us maintain these values.'
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

const AntiBullyingProtocolPage = () => {
  return (
    <LanguageProvider>
      <AntiBullyingProtocolContent />
    </LanguageProvider>
  );
};

export default AntiBullyingProtocolPage;
