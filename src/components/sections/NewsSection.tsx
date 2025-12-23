import { useLanguage } from '@/hooks/useLanguage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      type: t('Evenement', 'Event'),
      title: t('Winterkampioenschap 2024', 'Winter Championship 2024'),
      excerpt: t(
        'Onze leerlingen bereiden zich voor op het jaarlijkse winterkampioenschap. Kom langs om ze aan te moedigen!',
        'Our students are preparing for the annual winter championship. Come support them!'
      ),
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&q=80',
    },
    {
      id: 2,
      type: t('Nieuws', 'News'),
      title: t('Nieuwe Kinderlessen op Zaterdag', 'New Kids Classes on Saturday'),
      excerpt: t(
        'We starten met extra kinderlessen op zaterdagochtend. Perfect voor drukke gezinnen die doordeweeks geen tijd hebben.',
        'We are starting extra kids classes on Saturday mornings. Perfect for busy families.'
      ),
      date: '2024-01-28',
      image: 'https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?w=600&q=80',
    },
    {
      id: 3,
      type: t('Succes', 'Success'),
      title: t('3 Nieuwe Zwarte Banden!', '3 New Black Belts!'),
      excerpt: t(
        'Gefeliciteerd aan Lisa, Mark en Emma die afgelopen weekend succesvol hun zwarte band examen hebben afgelegd.',
        'Congratulations to Lisa, Mark and Emma who successfully passed their black belt exam last weekend.'
      ),
      date: '2024-01-20',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    },
    {
      id: 4,
      type: t('Workshop', 'Workshop'),
      title: t('Gastinstructeur uit Korea', 'Guest Instructor from Korea'),
      excerpt: t(
        'In maart verwelkomen we Meester Kang uit Seoul voor een exclusieve masterclass in traditionele Poomsae.',
        'In March we welcome Master Kang from Seoul for an exclusive masterclass in traditional Poomsae.'
      ),
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=80',
    },
    {
      id: 5,
      type: t('Evenement', 'Event'),
      title: t('Open Dag - Gratis Proeflessen', 'Open Day - Free Trial Classes'),
      excerpt: t(
        'Op 10 februari openen we onze deuren voor iedereen. Kom kennismaken met Taekwondo tijdens onze gratis proeflessen.',
        'On February 10th we open our doors to everyone. Experience Taekwondo during our free trial classes.'
      ),
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?w=600&q=80',
    },
    {
      id: 6,
      type: t('Nieuws', 'News'),
      title: t('Nieuwe Trainingsruimte Geopend', 'New Training Room Opened'),
      excerpt: t(
        'We hebben een tweede trainingsruimte geopend om meer gelijktijdige lessen te kunnen geven.',
        'We have opened a second training room to accommodate more simultaneous classes.'
      ),
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=80',
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'evenement':
      case 'event':
        return 'bg-primary text-primary-foreground';
      case 'nieuws':
      case 'news':
        return 'bg-accent text-accent-foreground';
      case 'succes':
      case 'success':
        return 'bg-korean-gold text-secondary';
      case 'workshop':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-24 bg-muted/30 relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* News Grid */}
        <div className={cn(
          "grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className={cn(
                "group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 hover:shadow-card transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1",
                    getTypeColor(item.type)
                  )}>
                    <Tag className="w-3 h-3" />
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                >
                  {t('Lees meer', 'Read more')}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className={cn(
          "text-center mt-12 transition-all duration-700 delay-500",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-muted-foreground mb-4">
            {t('Blijf op de hoogte van al onze activiteiten', 'Stay updated with all our activities')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
          >
            {t('Schrijf je in voor onze nieuwsbrief', 'Subscribe to our newsletter')} →
          </Link>
        </div>
      </div>
    </section>
  );
}
