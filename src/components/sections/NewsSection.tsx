import { useLanguage } from '@/hooks/useLanguage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '@/data/newsData';

export function NewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { language, t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', {
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
          {newsData.map((item, index) => {
            const title = language === 'nl' ? item.title.nl : item.title.en;
            const type = language === 'nl' ? item.type.nl : item.type.en;
            const excerpt = language === 'nl' ? item.excerpt.nl : item.excerpt.en;

            return (
              <article
                key={item.id}
                className={cn(
                  "group bg-card rounded-lg border border-border overflow-hidden hover:border-primary/30 hover:shadow-card transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                {/* Image */}
                <Link to={`/news/${item.id}`} className="block relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1",
                      getTypeColor(type)
                    )}>
                      <Tag className="w-3 h-3" />
                      {type}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={item.date}>{formatDate(item.date)}</time>
                  </div>
                  
                  <Link to={`/news/${item.id}`}>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {title}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {excerpt}
                  </p>

                  <Link
                    to={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors group/link"
                  >
                    {t('Lees meer', 'Read more')}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
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
