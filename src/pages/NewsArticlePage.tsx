import { useParams, Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/BackToTop';
import { getNewsById } from '@/data/newsData';
import { Calendar, ArrowLeft, Tag, User } from 'lucide-react';
import { cn } from '@/lib/utils';

function NewsArticleContent() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const article = id ? getNewsById(id) : undefined;

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

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              {t('Artikel niet gevonden', 'Article not found')}
            </h1>
            <p className="text-muted-foreground mb-8">
              {t('Het artikel dat je zoekt bestaat niet of is verwijderd.', 'The article you are looking for does not exist or has been removed.')}
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('Terug naar nieuws', 'Back to news')}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const title = language === 'nl' ? article.title.nl : article.title.en;
  const type = language === 'nl' ? article.type.nl : article.type.en;
  const content = language === 'nl' ? article.content.nl : article.content.en;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px]">
          <img
            src={article.image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
        </div>

        {/* Article Content */}
        <article className="relative -mt-32 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-card rounded-lg border border-border p-8 md:p-12 shadow-card">
              {/* Back Link */}
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                {t('Terug naar nieuws', 'Back to news')}
              </Link>

              {/* Type Badge */}
              <div className="mb-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1",
                  getTypeColor(type)
                )}>
                  <Tag className="w-3 h-3" />
                  {type}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </div>
                {article.author && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none text-foreground">
                {content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('*') && paragraph.endsWith('*') && !paragraph.startsWith('**')) {
                    return (
                      <h4 key={index} className="font-semibold text-foreground mt-6 mb-2 italic">
                        {paragraph.replace(/\*/g, '')}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-1 mb-4">
                        {items.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item.replace('- ', '').replace(/\*\*/g, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Share / CTA */}
              <div className="mt-12 pt-8 border-t border-border text-center">
                <p className="text-muted-foreground mb-4">
                  {t('Heb je vragen over dit artikel?', 'Do you have questions about this article?')}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
                >
                  {t('Neem contact met ons op', 'Contact us')} →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

const NewsArticlePage = () => {
  return (
    <LanguageProvider>
      <NewsArticleContent />
    </LanguageProvider>
  );
};

export default NewsArticlePage;
