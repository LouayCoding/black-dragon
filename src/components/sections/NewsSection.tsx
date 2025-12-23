import { useState, useMemo } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Calendar, ArrowRight, Tag, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsData } from '@/data/newsData';
import { Input } from '@/components/ui/input';

export function NewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) return newsData;
    
    const query = searchQuery.toLowerCase();
    return newsData.filter((item) => {
      const title = language === 'nl' ? item.title.nl : item.title.en;
      const excerpt = language === 'nl' ? item.excerpt.nl : item.excerpt.en;
      const type = language === 'nl' ? item.type.nl : item.type.en;
      const content = language === 'nl' ? item.content.nl : item.content.en;
      
      return (
        title.toLowerCase().includes(query) ||
        excerpt.toLowerCase().includes(query) ||
        type.toLowerCase().includes(query) ||
        content.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, language]);

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
        {/* Search Bar */}
        <div className={cn(
          "max-w-md mx-auto mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('Zoek artikelen...', 'Search articles...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-10 py-6 text-base bg-card border-border focus:border-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={t('Wis zoekopdracht', 'Clear search')}
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-sm text-muted-foreground mt-3 text-center">
              {filteredNews.length} {t('resultaten gevonden', 'results found')}
            </p>
          )}
        </div>

        {/* News Grid */}
        <div className={cn(
          "grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => {
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
            })
          ) : (
            <div className="col-span-full text-center py-16">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {t('Geen artikelen gevonden', 'No articles found')}
              </h3>
              <p className="text-muted-foreground">
                {t('Probeer een andere zoekterm', 'Try a different search term')}
              </p>
            </div>
          )}
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