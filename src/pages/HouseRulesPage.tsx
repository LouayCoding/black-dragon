import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { BackToTop } from '@/components/BackToTop';
import { Shield, Users, Award, Heart, UserCheck, Ban, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function HouseRulesContent() {
  const { t } = useLanguage();

  const codeOfHonor = {
    title: t('Erecode van vechtsport', 'Code of Honor in Martial Arts'),
    text: t(
      'Vechten gebeurt alleen op de mat of in de ring, en nooit op straat. De technieken die je worden aangeleerd mogen alleen worden gebruikt ter verdediging van jezelf of anderen. Je mag nooit je vechttechnieken gebruiken tegen iemand die zich niet kan verdedigen. Eer, loyaliteit en trouw zijn aan de code zijn belangrijker dan welke vechttechniek, graduatie of titel dan ook.',
      'Fighting only happens on the mat or in the ring, and never on the street. The techniques you are taught may only be used to defend yourself or others. You must never use your fighting techniques against someone who cannot defend themselves. Honor, loyalty and faithfulness to the code are more important than any fighting technique, rank or title.'
    ),
  };

  const memberRules = [
    t('Het gebruik van doping en stimulerende middelen is verboden.', 'The use of doping and stimulants is prohibited.'),
    t('Het gebruik van slecht onderhouden en/of onveilige materialen en hulpmiddelen is verboden; dit geldt zowel voor de materialen en hulpmiddelen van de organisatie als die van de sporter.', 'The use of poorly maintained and/or unsafe materials and aids is prohibited; this applies to both the materials and aids of the organization and those of the athlete.'),
    t('Er is respect voor onze partner (en zijn / haar niveau).', 'There is respect for our partner (and his/her level).'),
    t('We zijn altijd sportief ook al zijn andere dat niet.', 'We are always sportsmanlike even if others are not.'),
    t('Iedereen draagt tijdens de training voldoende beschermingsmaterialen om letsel en een kwetsuur te voorkomen.', 'Everyone wears sufficient protective materials during training to prevent injury and wounds.'),
    t('Het lid is verplicht zijn of haar gezondheidstoestand toe te lichten, mocht dit een negatieve invloed hebben op de beoefening van de sport.', 'The member is obliged to explain his or her health condition if this has a negative influence on the practice of the sport.'),
    t('Sieraden, piercings e.d. die letselrisico opleveren voor de drager of anderen worden verwijderd, dan wel afgeplakt.', 'Jewelry, piercings, etc. that pose a risk of injury to the wearer or others are removed or taped over.'),
    t('Drugsbezit en drugsgebruik in en om het sportcomplex is niet toegestaan en zal direct leiden tot een verbod.', 'Drug possession and drug use in and around the sports complex is not permitted and will immediately lead to a ban.'),
    t('Discriminatie, schelden, grof taalgebruik, treiteren, pesten, irriteren of kwetsen van wie dan ook wordt niet geaccepteerd en kunnen aanleiding zijn voor sancties.', 'Discrimination, swearing, coarse language, teasing, bullying, irritating or hurting anyone is not accepted and can be grounds for sanctions.'),
    t('Vechten gebeurt alleen op de mat of in de ring, en nooit op straat. De technieken die je worden aangeleerd mogen alleen worden gebruikt ter verdediging van jezelf of anderen. Je mag nooit je vechttechnieken gebruiken tegen iemand die zich niet kan verdedigen.', 'Fighting only happens on the mat or in the ring, and never on the street. The techniques you are taught may only be used to defend yourself or others. You must never use your fighting techniques against someone who cannot defend themselves.'),
  ];

  const additionalRules = [
    t('Het gebruik van mobiele telefoon of het aanstaan van een mobiele telefoon is verboden in de oefenzaal en tijdens de lessen.', 'The use of a mobile phone or having a mobile phone on is prohibited in the practice hall and during lessons.'),
    t('Het is ten strengste verboden te roken in het gebouw.', 'Smoking in the building is strictly prohibited.'),
    t('Je bent bij de training minimaal 5 à 10 minuten voor aanvang aanwezig.', 'You are present at training at least 5 to 10 minutes before the start.'),
    t('We zijn zuinig op elkaars spullen en die van de accommodatie/sportschool/-vereniging.', 'We take care of each other\'s belongings and those of the facility/gym/association.'),
    t('Je beschikt over een goede lichamelijke hygiëne zoals korte en schone nagels, frisse adem etc.', 'You have good personal hygiene such as short and clean nails, fresh breath, etc.'),
    t('De sporters zijn verplicht zich adequaat te verzekeren tegen ziektekosten.', 'Athletes are required to have adequate health insurance.'),
  ];

  const trainerRules = [
    t('heeft respect voor de leden, ouders/verzorgers en begeleiders;', 'has respect for members, parents/guardians and supervisors;'),
    t('brengt leden passie bij voor de sport;', 'instills passion for the sport in members;'),
    t('is verantwoordelijk voor de trainingsmaterialen;', 'is responsible for training materials;'),
    t('zorgt dat de dojo na de training (op tijd) leeg is van gebruikte materialen;', 'ensures that the dojo is empty of used materials after training (on time);'),
    t('ziet de meerwaarde om vechtsport als middel in te zetten voor de vorming van leden;', 'sees the added value of using martial arts as a means for the development of members;'),
    t('creëert in zijn training een setting van veiligheid en vertrouwen;', 'creates a setting of safety and trust in his training;'),
    t('houdt gebruik van doping en stimulerende middel tegen;', 'prevents the use of doping and stimulants;'),
    t('behandelt elk lid hetzelfde, ongeacht afkomst of niveau;', 'treats every member the same, regardless of origin or level;'),
    t('heeft aandacht voor fair play;', 'pays attention to fair play;'),
    t('gebruikt geen alcohol (en ook geen tabak) tijdens het trainen van de leden;', 'does not use alcohol (or tobacco) while training members;'),
    t('ziet er op toe dat er tijdens de lessen geen gebruik wordt gemaakt van mobiele telefoon;', 'ensures that mobile phones are not used during lessons;'),
    t('ziet er op toe dat mobiele telefoons tijdens de lessen uitstaan;', 'ensures that mobile phones are turned off during lessons;'),
    t('zorgt er voor de huis- en gedragsregels voor de leden nageleefd worden.', 'ensures that the house and conduct rules for members are observed.'),
  ];

  const parentRules = [
    t('is een goede supporter en geeft het goede voorbeeld door respect te hebben voor iedereen;', 'is a good supporter and sets a good example by respecting everyone;'),
    t('houdt zich afzijdig ten opzichte van de begeleiding van de leden door trainers en begeleiders;', 'stays away from the supervision of members by trainers and supervisors;'),
    t('zorgt ervoor dat zoon/dochter op tijd aanwezig is voor een training of een wedstrijd;', 'ensures that son/daughter is present on time for training or a competition;'),
    t('ziet er op toe dat zoon/dochter zich op tijd afmeldt voor een training of een wedstrijd;', 'ensures that son/daughter cancels in time for training or a competition;'),
    t('spreekt zoon/dochter aan op eventueel wangedrag', 'addresses son/daughter on any misconduct'),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="규칙"
          title={t('Huis- en', 'House and')}
          titleHighlight={t('Gedragsregels', 'Conduct Rules')}
          subtitle={t(
            'De vechtsportorganisatie heeft huis- en gedragsregels vastgesteld voor alle leden, trainers en ouders',
            'The martial arts organization has established house and conduct rules for all members, trainers and parents'
          )}
        />

        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Code of Honor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-lg p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex-1">
                    {codeOfHonor.title}
                  </h2>
                </div>
                <p className="text-foreground/90 leading-relaxed text-lg italic pl-16">
                  "{codeOfHonor.text}"
                </p>
              </div>
            </motion.div>

            {/* Member Rules */}
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
                  {t('Gedragsregels voor het lid', 'Conduct Rules for Members')}
                </h2>
              </div>

              <ul className="space-y-3 mb-8">
                {memberRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground/70">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  {t('Aanvullende regels:', 'Additional rules:')}
                </h3>
                <ul className="space-y-3">
                  {additionalRules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground/70">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Trainer Rules */}
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
                  {t('Gedragsregels voor de trainer', 'Conduct Rules for Trainers')}
                </h2>
              </div>

              <p className="text-foreground/70 mb-4">{t('De trainer:', 'The trainer:')}</p>

              <ul className="space-y-3">
                {trainerRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground/70">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Parent Rules */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-6 md:p-8 mb-12"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground flex-1">
                  {t('Gedragsregels voor de ouders/verzorgers van het lid', 'Conduct Rules for Parents/Guardians of Members')}
                </h2>
              </div>

              <p className="text-foreground/70 mb-4">{t('De ouder:', 'The parent:')}</p>

              <ul className="space-y-3">
                {parentRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground/70">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Footer Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted/50 border border-border rounded-lg p-6 md:p-8 text-center"
            >
              <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-foreground/70 text-sm leading-relaxed">
                {t(
                  'Deze huis- en gedragsregels zijn van toepassing op alle leden, trainers en ouders/verzorgers van Taekwondo Vereniging Black Dragon. Door lid te worden van onze vereniging ga je akkoord met deze regels.',
                  'These house and conduct rules apply to all members, trainers and parents/guardians of Taekwondo Association Black Dragon. By becoming a member of our association, you agree to these rules.'
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

const HouseRulesPage = () => {
  return (
    <LanguageProvider>
      <HouseRulesContent />
    </LanguageProvider>
  );
};

export default HouseRulesPage;
