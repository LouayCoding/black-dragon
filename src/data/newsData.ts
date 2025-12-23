export interface NewsItem {
  id: string;
  type: {
    nl: string;
    en: string;
  };
  title: {
    nl: string;
    en: string;
  };
  excerpt: {
    nl: string;
    en: string;
  };
  content: {
    nl: string;
    en: string;
  };
  date: string;
  image: string;
  author?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 'winterkampioenschap-2024',
    type: { nl: 'Evenement', en: 'Event' },
    title: { nl: 'Winterkampioenschap 2024', en: 'Winter Championship 2024' },
    excerpt: {
      nl: 'Onze leerlingen bereiden zich voor op het jaarlijkse winterkampioenschap. Kom langs om ze aan te moedigen!',
      en: 'Our students are preparing for the annual winter championship. Come support them!'
    },
    content: {
      nl: `Het is weer zover! Op 15 februari 2024 vindt het jaarlijkse Winterkampioenschap plaats in de Sporthal Amsterdam.

Onze school neemt deel met meer dan 30 leerlingen in verschillende categorieën:
- Kleine Tijgers (4-6 jaar)
- Jeugd (7-12 jaar)
- Tieners (13-17 jaar)
- Volwassenen (18+)

**Wedstrijdonderdelen:**
- Poomsae (vormen)
- Kyorugi (sparring)
- Breektechnieken

We nodigen alle ouders, familieleden en vrienden uit om onze atleten aan te moedigen. De toegang is gratis en er is een gezellige kantine aanwezig.

**Praktische informatie:**
- Datum: 15 februari 2024
- Locatie: Sporthal Amsterdam, Olympiaplein 1
- Aanvang: 09:00 uur
- Verwachte eindtijd: 17:00 uur

Veel succes aan al onze deelnemers!`,
      en: `It's that time again! On February 15, 2024, the annual Winter Championship will take place at Sporthal Amsterdam.

Our school participates with more than 30 students in various categories:
- Little Tigers (ages 4-6)
- Youth (ages 7-12)
- Teens (ages 13-17)
- Adults (18+)

**Competition events:**
- Poomsae (forms)
- Kyorugi (sparring)
- Breaking techniques

We invite all parents, family members, and friends to cheer on our athletes. Admission is free and there is a cozy canteen available.

**Practical information:**
- Date: February 15, 2024
- Location: Sporthal Amsterdam, Olympiaplein 1
- Start: 9:00 AM
- Expected end time: 5:00 PM

Good luck to all our participants!`
    },
    date: '2024-02-15',
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1200&q=80',
    author: 'Meester Park'
  },
  {
    id: 'nieuwe-kinderlessen-zaterdag',
    type: { nl: 'Nieuws', en: 'News' },
    title: { nl: 'Nieuwe Kinderlessen op Zaterdag', en: 'New Kids Classes on Saturday' },
    excerpt: {
      nl: 'We starten met extra kinderlessen op zaterdagochtend. Perfect voor drukke gezinnen die doordeweeks geen tijd hebben.',
      en: 'We are starting extra kids classes on Saturday mornings. Perfect for busy families.'
    },
    content: {
      nl: `Goed nieuws voor drukke gezinnen! Vanaf volgende maand bieden we extra kinderlessen aan op zaterdagochtend.

**Nieuwe lesschema zaterdag:**
- 09:00 - 09:45: Kleine Tijgers (4-6 jaar)
- 10:00 - 11:00: Jeugd Beginners (7-12 jaar)
- 11:15 - 12:15: Jeugd Gevorderden (7-12 jaar)

Deze lessen zijn ideaal voor:
- Kinderen van werkende ouders
- Gezinnen met drukke weekschema's
- Kinderen die extra training willen

De zaterdaglessen worden gegeven door Instructeur Choi, onze specialist in kinderprogramma's. Ze heeft jarenlange ervaring in het lesgeven aan jonge kinderen en maakt elke les leuk én leerzaam.

**Inschrijven:**
Neem contact op via info@taekwondo.nl of bel (020) 123-4567 om je kind in te schrijven voor de zaterdaglessen.`,
      en: `Great news for busy families! Starting next month, we offer extra kids classes on Saturday mornings.

**New Saturday schedule:**
- 09:00 - 09:45: Little Tigers (ages 4-6)
- 10:00 - 11:00: Youth Beginners (ages 7-12)
- 11:15 - 12:15: Youth Advanced (ages 7-12)

These classes are ideal for:
- Children of working parents
- Families with busy weekday schedules
- Children who want extra training

The Saturday classes are taught by Instructor Choi, our specialist in children's programs. She has years of experience teaching young children and makes every class fun and educational.

**Registration:**
Contact us at info@taekwondo.nl or call (020) 123-4567 to register your child for Saturday classes.`
    },
    date: '2024-01-28',
    image: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=1200&q=80',
    author: 'Instructeur Choi'
  },
  {
    id: 'nieuwe-zwarte-banden',
    type: { nl: 'Succes', en: 'Success' },
    title: { nl: '3 Nieuwe Zwarte Banden!', en: '3 New Black Belts!' },
    excerpt: {
      nl: 'Gefeliciteerd aan Lisa, Mark en Emma die afgelopen weekend succesvol hun zwarte band examen hebben afgelegd.',
      en: 'Congratulations to Lisa, Mark and Emma who successfully passed their black belt exam last weekend.'
    },
    content: {
      nl: `Met trots kondigen we aan dat drie van onze toegewijde leerlingen afgelopen weekend succesvol hun zwarte band examen hebben afgelegd!

**Onze nieuwe zwarte banden:**
- **Lisa Vermeer** (1e Dan) - Na 4 jaar training
- **Mark Jansen** (1e Dan) - Na 5 jaar training  
- **Emma de Vries** (1e Dan) - Na 4,5 jaar training

Het examen werd afgenomen door Grootmeester Kim en bestond uit:
- Alle 8 Taegeuk Poomsae
- Zelfverdedigingstechnieken
- Breektechnieken
- Theoretische kennis
- Sparring

Alle drie de kandidaten toonden uitzonderlijke techniek, discipline en doorzettingsvermogen. Hun reis naar zwarte band was niet altijd makkelijk, maar ze gaven nooit op.

"Deze drie leerlingen zijn een inspiratie voor iedereen in onze school," aldus Grootmeester Kim. "Ze tonen aan wat mogelijk is met toewijding en hard werken."

Gefeliciteerd Lisa, Mark en Emma! Jullie harde werk heeft zich uitbetaald. We zijn ontzettend trots op jullie!`,
      en: `We are proud to announce that three of our dedicated students successfully passed their black belt exam last weekend!

**Our new black belts:**
- **Lisa Vermeer** (1st Dan) - After 4 years of training
- **Mark Jansen** (1st Dan) - After 5 years of training
- **Emma de Vries** (1st Dan) - After 4.5 years of training

The exam was administered by Grandmaster Kim and consisted of:
- All 8 Taegeuk Poomsae
- Self-defense techniques
- Breaking techniques
- Theoretical knowledge
- Sparring

All three candidates showed exceptional technique, discipline, and perseverance. Their journey to black belt was not always easy, but they never gave up.

"These three students are an inspiration to everyone in our school," said Grandmaster Kim. "They demonstrate what is possible with dedication and hard work."

Congratulations Lisa, Mark, and Emma! Your hard work has paid off. We are incredibly proud of you!`
    },
    date: '2024-01-20',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80',
    author: 'Grootmeester Kim'
  },
  {
    id: 'gastinstructeur-korea',
    type: { nl: 'Workshop', en: 'Workshop' },
    title: { nl: 'Gastinstructeur uit Korea', en: 'Guest Instructor from Korea' },
    excerpt: {
      nl: 'In maart verwelkomen we Meester Kang uit Seoul voor een exclusieve masterclass in traditionele Poomsae.',
      en: 'In March we welcome Master Kang from Seoul for an exclusive masterclass in traditional Poomsae.'
    },
    content: {
      nl: `Een unieke kans voor onze leerlingen! In maart verwelkomen we Meester Kang Dong-soo uit Seoul voor een exclusieve masterclass.

**Over Meester Kang:**
Meester Kang (7e Dan) is een gerenommeerde Poomsae expert uit Zuid-Korea. Hij heeft:
- Meer dan 35 jaar ervaring
- Getraind aan het Kukkiwon (World Taekwondo Headquarters)
- Meerdere internationale Poomsae kampioenschappen gewonnen
- Tientallen nationale kampioenen opgeleid

**Workshop details:**
- **Datum:** 16-17 maart 2024
- **Tijden:** 10:00 - 16:00 (beide dagen)
- **Focus:** Traditionele Poomsae en applicaties
- **Niveau:** Groene band en hoger

**Programma:**
*Dag 1:*
- Verfijning van Taegeuk Poomsae 1-4
- Bunkai (praktische toepassingen)
- Ademhalingstechnieken

*Dag 2:*
- Taegeuk Poomsae 5-8
- Geavanceerde toepassingen
- Vraag & antwoord sessie

**Kosten:** €75 voor beide dagen (leden), €95 (niet-leden)

Plaatsen zijn beperkt tot 30 deelnemers. Schrijf je snel in via de receptie of mail naar info@taekwondo.nl`,
      en: `A unique opportunity for our students! In March we welcome Master Kang Dong-soo from Seoul for an exclusive masterclass.

**About Master Kang:**
Master Kang (7th Dan) is a renowned Poomsae expert from South Korea. He has:
- Over 35 years of experience
- Trained at Kukkiwon (World Taekwondo Headquarters)
- Won multiple international Poomsae championships
- Trained dozens of national champions

**Workshop details:**
- **Date:** March 16-17, 2024
- **Times:** 10:00 AM - 4:00 PM (both days)
- **Focus:** Traditional Poomsae and applications
- **Level:** Green belt and above

**Program:**
*Day 1:*
- Refinement of Taegeuk Poomsae 1-4
- Bunkai (practical applications)
- Breathing techniques

*Day 2:*
- Taegeuk Poomsae 5-8
- Advanced applications
- Q&A session

**Cost:** €75 for both days (members), €95 (non-members)

Spots are limited to 30 participants. Register quickly at the reception or email info@taekwondo.nl`
    },
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=80',
    author: 'Meester Lee'
  },
  {
    id: 'open-dag-proeflessen',
    type: { nl: 'Evenement', en: 'Event' },
    title: { nl: 'Open Dag - Gratis Proeflessen', en: 'Open Day - Free Trial Classes' },
    excerpt: {
      nl: 'Op 10 februari openen we onze deuren voor iedereen. Kom kennismaken met Taekwondo tijdens onze gratis proeflessen.',
      en: 'On February 10th we open our doors to everyone. Experience Taekwondo during our free trial classes.'
    },
    content: {
      nl: `Benieuwd naar Taekwondo? Op zaterdag 10 februari openen we onze deuren voor iedereen die kennis wil maken met deze prachtige Koreaanse krijgskunst.

**Programma Open Dag:**

*10:00 - 10:45*
Proefles Kleine Tijgers (4-6 jaar)
Een speelse introductie voor de allerkleinsten.

*11:00 - 12:00*
Proefles Jeugd (7-12 jaar)
Leer de basistrappen en ontdek je kracht.

*12:00 - 13:00*
Lunch & Demonstratie
Geniet van een hapje terwijl onze gevorderde leerlingen hun kunnen tonen.

*13:30 - 14:30*
Proefles Tieners & Volwassenen (13+)
Een volledige introductie voor tieners en volwassenen.

*15:00 - 15:30*
Vraag & Antwoord
Stel al je vragen aan onze instructeurs.

**Wat moet je meenemen?**
- Comfortabele sportkleding
- Water
- Enthousiasme!

Aanmelden is niet verplicht maar wel handig. Stuur een mail naar info@taekwondo.nl met je naam, leeftijd en gewenste proefles.

We kijken ernaar uit je te ontmoeten!`,
      en: `Curious about Taekwondo? On Saturday, February 10th, we open our doors to everyone who wants to experience this beautiful Korean martial art.

**Open Day Program:**

*10:00 - 10:45*
Trial Class Little Tigers (ages 4-6)
A playful introduction for the youngest ones.

*11:00 - 12:00*
Trial Class Youth (ages 7-12)
Learn basic kicks and discover your strength.

*12:00 - 1:00 PM*
Lunch & Demonstration
Enjoy a snack while our advanced students show their skills.

*1:30 - 2:30 PM*
Trial Class Teens & Adults (13+)
A full introduction for teens and adults.

*3:00 - 3:30 PM*
Q&A Session
Ask all your questions to our instructors.

**What to bring?**
- Comfortable sportswear
- Water
- Enthusiasm!

Registration is not required but helpful. Send an email to info@taekwondo.nl with your name, age, and preferred trial class.

We look forward to meeting you!`
    },
    date: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=1200&q=80',
    author: 'Het Taekwondo Team'
  },
  {
    id: 'nieuwe-trainingsruimte',
    type: { nl: 'Nieuws', en: 'News' },
    title: { nl: 'Nieuwe Trainingsruimte Geopend', en: 'New Training Room Opened' },
    excerpt: {
      nl: 'We hebben een tweede trainingsruimte geopend om meer gelijktijdige lessen te kunnen geven.',
      en: 'We have opened a second training room to accommodate more simultaneous classes.'
    },
    content: {
      nl: `Grote nieuws! Na maanden van renovatie is onze tweede trainingsruimte officieel geopend.

**Wat betekent dit voor jou?**

*Meer lessen:*
Met twee ruimtes kunnen we nu gelijktijdig lessen geven. Dit betekent meer keuze in lestijden en kleinere groepen.

*Betere faciliteiten:*
De nieuwe ruimte is uitgerust met:
- 100m² puzzelmatten
- Spiegelwand voor techniekstudie
- Modern geluidssysteem
- Airconditioning
- Eigen kleedkamers

*Nieuwe mogelijkheden:*
- Parallelle lessen voor verschillende niveaus
- Meer ruimte voor privélessen
- Speciale workshops en seminars
- Betere voorbereiding voor wedstrijden

**Het vernieuwde lesrooster:**
Vanaf volgende week gaat het nieuwe rooster in. Je ontvangt een mail met alle details. Het belangrijkste:
- Meer avondlessen beschikbaar
- Extra ochtendlessen op dinsdag en donderdag
- Geen wachtlijsten meer voor populaire tijdsloten

We danken iedereen voor het geduld tijdens de verbouwing. De nieuwe ruimte is het resultaat van jullie loyaliteit en we hopen dat jullie er net zo blij mee zijn als wij!`,
      en: `Big news! After months of renovation, our second training room is officially open.

**What does this mean for you?**

*More classes:*
With two rooms, we can now teach simultaneous classes. This means more choice in class times and smaller groups.

*Better facilities:*
The new room is equipped with:
- 100m² puzzle mats
- Mirror wall for technique study
- Modern sound system
- Air conditioning
- Dedicated changing rooms

*New possibilities:*
- Parallel classes for different levels
- More room for private lessons
- Special workshops and seminars
- Better preparation for competitions

**The renewed schedule:**
The new schedule starts next week. You will receive an email with all details. The highlights:
- More evening classes available
- Extra morning classes on Tuesday and Thursday
- No more waiting lists for popular time slots

We thank everyone for their patience during the renovation. The new room is the result of your loyalty and we hope you are as happy with it as we are!`
    },
    date: '2024-01-05',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&q=80',
    author: 'Grootmeester Kim'
  }
];

export function getNewsById(id: string): NewsItem | undefined {
  return newsData.find(item => item.id === id);
}

export function getRelatedNews(currentId: string, limit: number = 3): NewsItem[] {
  return newsData.filter(item => item.id !== currentId).slice(0, limit);
}
