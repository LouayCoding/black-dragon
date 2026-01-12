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
    title: Erecode van vechtsport,
    text: Vechten gebeurt alleen op de mat of in de ring, en nooit op straat. De technieken die je worden aangeleerd mogen alleen worden gebruikt ter verdediging van jezelf of anderen. Je mag nooit je vechttechnieken gebruiken tegen iemand die zich niet kan verdedigen. Eer, loyaliteit en trouw zijn aan de code zijn belangrijker dan welke vechttechniek, graduatie of titel dan ook.,
  };

  const memberRules = [
    Het gebruik van doping en stimulerende middelen is verboden.,
    Het gebruik van slecht onderhouden en/of onveilige materialen en hulpmiddelen is verboden; dit geldt zowel voor de materialen en hulpmiddelen van de organisatie als die van de sporter.,
    Er is respect voor onze partner (en zijn / haar niveau).,
    We zijn altijd sportief ook al zijn andere dat niet.,
    Iedereen draagt tijdens de training voldoende beschermingsmaterialen om letsel en een kwetsuur te voorkomen.,
    Het lid is verplicht zijn of haar gezondheidstoestand toe te lichten, mocht dit een negatieve invloed hebben op de beoefening van de sport.,
    Sieraden, piercings e.d. die letselrisico opleveren voor de drager of anderen worden verwijderd, dan wel afgeplakt.,
    Drugsbezit en drugsgebruik in en om het sportcomplex is niet toegestaan en zal direct leiden tot een verbod.,
    Discriminatie, schelden, grof taalgebruik, treiteren, pesten, irriteren of kwetsen van wie dan ook wordt niet geaccepteerd en kunnen aanleiding zijn voor sancties.,
    Vechten gebeurt alleen op de mat of in de ring, en nooit op straat. De technieken die je worden aangeleerd mogen alleen worden gebruikt ter verdediging van jezelf of anderen. Je mag nooit je vechttechnieken gebruiken tegen iemand die zich niet kan verdedigen.,
  ];

  const additionalRules = [
    Het gebruik van mobiele telefoon of het aanstaan van een mobiele telefoon is verboden in de oefenzaal en tijdens de lessen.,
    Het is ten strengste verboden te roken in het gebouw.,
    Je bent bij de training minimaal 5 à 10 minuten voor aanvang aanwezig.,
    t('We zijn zuinig op elkaars spullen en die van de accommodatie/sportschool/-vereniging.', 'We take care of each other\'s belongings and those of the facility/gym/association.'),
    Je beschikt over een goede lichamelijke hygiëne zoals korte en schone nagels, frisse adem etc.,
    De sporters zijn verplicht zich adequaat te verzekeren tegen ziektekosten.,
  ];

  const trainerRules = [
    heeft respect voor de leden, ouders/verzorgers en begeleiders;,
    brengt leden passie bij voor de sport;,
    is verantwoordelijk voor de trainingsmaterialen;,
    zorgt dat de dojo na de training (op tijd) leeg is van gebruikte materialen;,
    ziet de meerwaarde om vechtsport als middel in te zetten voor de vorming van leden;,
    creëert in zijn training een setting van veiligheid en vertrouwen;,
    houdt gebruik van doping en stimulerende middel tegen;,
    behandelt elk lid hetzelfde, ongeacht afkomst of niveau;,
    heeft aandacht voor fair play;,
    gebruikt geen alcohol (en ook geen tabak) tijdens het trainen van de leden;,
    ziet er op toe dat er tijdens de lessen geen gebruik wordt gemaakt van mobiele telefoon;,
    ziet er op toe dat mobiele telefoons tijdens de lessen uitstaan;,
    zorgt er voor de huis- en gedragsregels voor de leden nageleefd worden.,
  ];

  const parentRules = [
    is een goede supporter en geeft het goede voorbeeld door respect te hebben voor iedereen;,
    houdt zich afzijdig ten opzichte van de begeleiding van de leden door trainers en begeleiders;,
    zorgt ervoor dat zoon/dochter op tijd aanwezig is voor een training of een wedstrijd;,
    ziet er op toe dat zoon/dochter zich op tijd afmeldt voor een training of een wedstrijd;,
    spreekt zoon/dochter aan op eventueel wangedrag,
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHero
          koreanText="규칙"
          title={Huis- en}
          titleHighlight={Gedragsregels}
          subtitle={De vechtsportorganisatie heeft huis- en gedragsregels vastgesteld voor alle leden, trainers en ouders}
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
                  {Gedragsregels voor het lid}
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
                  {Aanvullende regels:}
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
                  {Gedragsregels voor de trainer}
                </h2>
              </div>

              <p className="text-foreground/70 mb-4">{De trainer:}</p>

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
                  {Gedragsregels voor de ouders/verzorgers van het lid}
                </h2>
              </div>

              <p className="text-foreground/70 mb-4">{De ouder:}</p>

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
                {Deze huis- en gedragsregels zijn van toepassing op alle leden, trainers en ouders/verzorgers van Taekwondo Vereniging Black Dragon. Door lid te worden van onze vereniging ga je akkoord met deze regels.}
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
