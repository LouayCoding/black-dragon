import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { BackToTop } from '@/components/BackToTop';
import { Shield, Users, AlertTriangle, Phone, Mail, UserCheck, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

function SexualHarassmentProtocolContent() {
  const { t } = useLanguage();

  const conductRules = [
    t('Ik accepteer en respecteer de ander zoals hij is en discrimineer niet. Iedereen telt mee binnen de club.', 'I accept and respect others as they are and do not discriminate. Everyone counts within the club.'),
    t('Ik houd rekening met de grenzen die de ander aangeeft.', 'I respect the boundaries that others indicate.'),
    t('Ik val de ander niet lastig.', 'I do not harass others.'),
    t('Ik berokken de ander geen schade.', 'I do not cause harm to others.'),
    t('Ik maak op geen enkele wijze misbruik van mijn machtspositie.', 'I do not abuse my position of power in any way.'),
    t('Ik scheld niet en maak geen gemene grappen of opmerkingen over anderen.', 'I do not swear and do not make mean jokes or comments about others.'),
    t('Ik negeer de ander niet.', 'I do not ignore others.'),
    t('Ik doe niet mee aan pesten, uitlachen of roddelen.', 'I do not participate in bullying, mocking or gossiping.'),
    t('Ik vecht niet, ik gebruik geen geweld, ik bedreig de ander niet, ik neem geen wapens mee.', 'I do not fight, I do not use violence, I do not threaten others, I do not bring weapons.'),
    t('Ik kom niet ongewenst te dichtbij en raak de ander niet tegen zijn of haar wil aan.', 'I do not get unwantedly close and do not touch others against their will.'),
    t('Ik geef de ander geen ongewenste seksueel getinte aandacht.', 'I do not give others unwanted sexually tinted attention.'),
    t('Ik stel geen ongepaste vragen en maak geen ongewenste opmerkingen over iemands persoonlijk leven of uiterlijk.', 'I do not ask inappropriate questions and do not make unwanted comments about someone\'s personal life or appearance.'),
    t('Als iemand mij hindert of lastig valt dan vraag ik hem/haar hiermee te stoppen.', 'If someone bothers or harasses me, I ask him/her to stop.'),
    t('Als dat niet helpt, vraag ik een ander om hulp.', 'If that doesn\'t help, I ask someone else for help.'),
    t('Ik help anderen om zich ook aan deze afspraken te houden en spreek degene die zich daar niet aan houdt erop aan en meldt dit zo nodig bij de trainers / directie.', 'I help others to also adhere to these agreements and address those who do not comply and report this to the trainers/management if necessary.'),
  ];

  const supervisorRules = [
    t('De begeleider moet zorgen voor een omgeving en een sfeer waarbinnen de leden zich veilig kunnen voelen.', 'The supervisor must ensure an environment and atmosphere in which members can feel safe.'),
    t('De begeleider onthoudt zich ervan de leden te bejegenen op een wijze die de leden in zijn/haar waardigheid aantast, én verder in het privé-leven van de leden door te dringen dan nodig is in het kader van de sportbeoefening.', 'The supervisor refrains from treating members in a way that affects their dignity, and from penetrating further into the private lives of members than is necessary in the context of sports practice.'),
    t('De begeleider onthoudt zich van elke vorm van (machts)misbruik of Seksuele Intimidatie tegenover de leden.', 'The supervisor refrains from any form of (power) abuse or Sexual Harassment towards members.'),
    t('Seksuele handelingen en seksuele relaties tussen de begeleider en de jeugdige leden tot achttien jaar zijn onder geen beding geoorloofd en worden beschouwd als seksueel misbruik.', 'Sexual acts and sexual relationships between the supervisor and young members up to eighteen years are not permitted under any circumstances and are considered sexual abuse.'),
    t('De begeleider mag de leden niet op een zodanige wijze aanraken dat de leden en/of de begeleider deze aanraking naar redelijke verwachting als seksueel of erotisch van aard zal ervaren, zoals doorgaans het geval zal zijn bij het doelbewust (doen) aanraken van geslachtsdelen, billen en borsten.', 'The supervisor may not touch members in such a way that the members and/or the supervisor can reasonably be expected to experience this touch as sexual or erotic in nature, as will generally be the case with deliberately touching genitals, buttocks and breasts.'),
    t('De begeleider onthoudt zich van (verbale) seksueel getinte intimiteiten via welk communicatiemiddel dan ook.', 'The supervisor refrains from (verbal) sexually tinted intimacies via any means of communication.'),
    t('De begeleider zal tijdens training(stages) gereserveerd en met respect omgaan met de leden en met de ruimte waarin deze zich bevindt, zoals de kleedkamer.', 'The supervisor will treat members and the space in which they are located, such as the changing room, with reserve and respect during training (camps).'),
    t('De begeleider heeft de plicht - voor zover in zijn vermogen ligt - de leden te beschermen tegen schade en (machts)misbruik als gevolg van Seksuele Intimidatie.', 'The supervisor has the duty - to the extent within his power - to protect members against harm and (power) abuse as a result of Sexual Harassment.'),
    t('De begeleider zal de leden geen (im)materiële vergoedingen geven met de kennelijke bedoeling tegenprestaties te vragen. Ook de begeleider aanvaardt geen financiële beloning of geschenken van de leden die in onevenredige verhouding tot de gebruikelijke dan wel afgesproken honorering staan.', 'The supervisor will not give members (im)material compensation with the obvious intention of asking for services in return. The supervisor also does not accept financial rewards or gifts from members that are disproportionate to the usual or agreed remuneration.'),
    t('De begeleider zal er actief op toezien dat deze regels worden nageleefd door iedereen die bij de sporters is betrokken. Indien de begeleider gedrag signaleert dat niet in overeenstemming is met deze gedragsregels zal hij de daartoe noodzakelijke actie(s) ondernemen.', 'The supervisor will actively ensure that these rules are observed by everyone involved with the athletes. If the supervisor detects behavior that is not in accordance with these conduct rules, he will take the necessary action(s).'),
    t('In die gevallen waarin deze regels niet (direct) voorzien, ligt het binnen de verantwoordelijkheid van de begeleider in de geest hiervan te handelen.', 'In those cases where these rules do not (directly) provide, it is within the responsibility of the supervisor to act in this spirit.'),
    t('Tevens verlangen wij van alle begeleiders dat zij een Verklaring Omtrent Gedrag (VOG) kunnen overleggen en controleren of zij zijn opgenomen in het registratiesysteem voor plegers Seksuele Intimidatie.', 'We also require all supervisors to be able to provide a Certificate of Conduct (VOG) and check whether they are included in the registration system for perpetrators of Sexual Harassment.'),
  ];

  const confidentialContacts = [
    {
      name: 'Dhr. Hans Loeffen',
      email: 'hans.notinmydojo@gmail.com',
      phone: '+31(0)6-52304344',
    },
    {
      name: 'Dhr. Richard van Asdonck',
      email: 'asdonck@xs4all.nl',
      phone: '+31(0)6-5513065',
    },
    {
      name: 'Dhr. Farid Gamei',
      email: 'farid@vechtsportautoriteit.nl',
      phone: '',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="안전"
          title={t('Protocol', 'Protocol')}
          titleHighlight={t('Seksuele Intimidatie', 'Sexual Harassment')}
          subtitle={t(
            'Hoe wij door gewenst gedrag te stimuleren en risicosituaties te mijden, seksuele intimidatie binnen de club trachten te voorkomen',
            'How we try to prevent sexual harassment within the club by encouraging desired behavior and avoiding risk situations'
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
                    'In dit document hebben wij als directie van Taekwondo vereniging Black Dragon vastgelegd hoe wij door gewenst gedrag te stimuleren en risicosituaties te mijden, seksuele intimidatie binnen de club trachten te voorkomen. Hierin zal behandeld worden hoe wij omgaan met situaties waarin dit toch gebeurt/dreigt te gebeuren en zal uitgewerkt worden welke sancties mogelijk zijn als een situatie niet tot een oplossing komt.',
                    'In this document, we as management of Taekwondo association Black Dragon have established how we try to prevent sexual harassment within the club by encouraging desired behavior and avoiding risk situations. This will cover how we deal with situations where this still happens/threatens to happen and will outline what sanctions are possible if a situation does not lead to a solution.'
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
                  'Het is erg belangrijk dat leden zich veilig voelen in hun sportomgeving. Hier hoort bij dat zij zich niet seksueel geïntimideerd mogen voelen. Om het risico daarop zo klein mogelijk te maken hebben we een aantal omgangsregels opgesteld. Deze regels zijn hieronder te vinden:',
                  'It is very important that members feel safe in their sports environment. This includes that they should not feel sexually harassed. To minimize the risk of this, we have established a number of conduct rules. These rules can be found below:'
                )}
              </p>

              <ul className="space-y-3 mb-8">
                {conductRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground/70">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">{index + 1}</span>
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-foreground/70 italic">
                  {t(
                    'Bovenstaande regels worden al bij inschrijving kenbaar gemaakt aan al onze leden en zij dienen hiermee akkoord te gaan voordat ze lid kunnen worden. Tevens zijn deze regels terug te vinden op onze website. Hier wordt ook informatie gegeven over de vertrouwens contactpersoon. Aan leden maar ook aan trainers/coaches, directie en aan ouders/verzorgers wordt gevraagd om ongewenst gedrag bij de VCP te melden wanneer zij dit tegenkomen of vermoeden.',
                    'The above rules are made known to all our members upon registration and they must agree to them before they can become a member. These rules can also be found on our website. Information about the confidential contact person is also provided here. Members as well as trainers/coaches, management and parents/guardians are asked to report unwanted behavior to the VCP when they encounter or suspect it.'
                  )}
                </p>
              </div>
            </motion.div>

            {/* Confidential Contact Persons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex-1">
                  {t('Vertrouwenscontactpersonen', 'Confidential Contact Persons')}
                </h2>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {t(
                  'Bij een vertrouwenscontactpersoon (VCP) kan je grensoverschrijdend gedrag melden. Als je niet bij een trainer of sportschoolhouder terecht kan of wil, benader dan een VCP. De VCP kan achterhalen wat er is gebeurd, en inschatten wat de beste vervolgstappen zijn.',
                  'You can report transgressive behavior to a confidential contact person (VCP). If you cannot or do not want to go to a trainer or gym owner, contact a VCP. The VCP can find out what happened and assess what the best next steps are.'
                )}
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  <strong>{t('Let op:', 'Note:')}</strong> {t(
                    'Een melding van grensoverschrijdend gedrag wordt altijd in vertrouwelijkheid gedaan. Maar vertrouwelijkheid betekent niet hetzelfde als geheimhouding. Vertrouwelijkheid betekent dat een melding nooit zomaar met iemand mag worden gedeeld. Maar concrete meldingen van verregaand seksueel grensoverschrijdend gedrag, zoals aanranding of verkrachting, moeten wel worden gemeld. Hiervoor neemt de VCP contact op met het Centrum Veilige Sport.',
                    'A report of transgressive behavior is always made in confidence. But confidentiality does not mean the same as secrecy. Confidentiality means that a report may never be shared with anyone just like that. But concrete reports of far-reaching sexual transgressive behavior, such as assault or rape, must be reported. For this, the VCP contacts the Center for Safe Sport.'
                  )}
                </p>
              </div>

              <p className="text-foreground/70 mb-6">
                {t(
                  'Het NOC*NSF heeft vertrouwenscontactpersonen opgeleid voor de vechtsport. Drie van hen zijn het eerste aanspreekpunt:',
                  'The NOC*NSF has trained confidential contact persons for martial arts. Three of them are the first point of contact:'
                )}
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {confidentialContacts.map((contact, index) => (
                  <div key={index} className="bg-muted/30 border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-3">{contact.name}</h3>
                    <div className="space-y-2">
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="break-all">{contact.email}</span>
                      </a>
                      {contact.phone && (
                        <a
                          href={`tel:${contact.phone}`}
                          className="flex items-center gap-2 text-sm text-primary hover:underline"
                        >
                          <Phone className="w-4 h-4" />
                          <span>{contact.phone}</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Supervisor Rules */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex-1">
                  {t('Begeleiders', 'Supervisors')}
                </h2>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6">
                {t(
                  'Naast de algemene omgangsregels hanteren wij ook aanvullende regels voor trainers, coaches en anderen die een actieve rol spelen rondom de jeugdige leden (hierna: \'begeleiders\'):',
                  'In addition to the general conduct rules, we also have additional rules for trainers, coaches and others who play an active role around young members (hereinafter: \'supervisors\'):'
                )}
              </p>

              <ul className="space-y-3">
                {supervisorRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground/70">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">{index + 1}</span>
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Section 2: Resolving Situations */}
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
                  {t('2. Situaties van seksuele intimidatie oplossen', '2. Resolving Sexual Harassment Situations')}
                </h2>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {t(
                  'Als er zich een situatie voordoet waarin een lid zich toch seksueel geïntimideerd voelt kan deze terecht bij de vertrouwenscontactpersoon (VCP) van onze club. Deze is te bereiken via de gegevens zoals vermeld in dit protocol en op de website. Deze persoon is opgeleid om dergelijke uiteenlopende situaties in te schatten en de bijbehorende procedures te starten en te begeleiden.',
                  'If a situation arises in which a member still feels sexually harassed, they can contact the confidential contact person (VCP) of our club. This person can be reached via the details as stated in this protocol and on the website. This person is trained to assess such diverse situations and to start and guide the associated procedures.'
                )}
              </p>
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
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex-1">
                  {t('3. Sancties', '3. Sanctions')}
                </h2>
              </div>

              <p className="text-foreground/70 leading-relaxed">
                {t(
                  'Een aantal van de sancties zijn voor de club extern, denk hierbij aan een vervolging voor overtreding van artikelen uit het Wetboek van Strafrecht. Wel kunnen interne sancties na overleg met de VCP door de directie opgelegd worden. De directie stelt hierbij het collectieve belang van haar leden boven eventueel individueel belang van een lid.',
                  'Some of the sanctions are external to the club, think of prosecution for violation of articles from the Criminal Code. However, internal sanctions can be imposed by management after consultation with the VCP. In doing so, management places the collective interest of its members above any individual interest of a member.'
                )}
              </p>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 md:p-8 text-center"
            >
              <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <p className="text-foreground/70 text-sm leading-relaxed font-semibold">
                {t(
                  'Bij Taekwondo Vereniging Black Dragon hebben we een nultolerantie beleid voor seksuele intimidatie. Alle meldingen worden serieus genomen en vertrouwelijk behandeld.',
                  'At Taekwondo Association Black Dragon we have a zero tolerance policy for sexual harassment. All reports are taken seriously and treated confidentially.'
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

const SexualHarassmentProtocolPage = () => {
  return (
    <LanguageProvider>
      <SexualHarassmentProtocolContent />
    </LanguageProvider>
  );
};

export default SexualHarassmentProtocolPage;
