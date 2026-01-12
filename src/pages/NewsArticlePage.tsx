import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/hooks/useLanguage';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Calendar, ArrowLeft, Tag, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  image_url: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
}

function NewsArticleContent() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadArticle(id);
    }
  }, [id]);

  const loadArticle = async (slug: string) => {
    try {
      const { supabase } = await import('@/lib/supabase');
      
      // Fetch main article
      const { data: articleData, error: articleError } = await supabase
        .from('news_articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

      if (articleError) throw articleError;
      setArticle(articleData);

      // Fetch related articles
      const { data: relatedData, error: relatedError } = await supabase
        .from('news_articles')
        .select('*')
        .eq('published', true)
        .neq('slug', slug)
        .order('published_at', { ascending: false })
        .limit(3);

      if (!relatedError && relatedData) {
        setRelatedArticles(relatedData);
      }
    } catch (error) {
      console.error('Error loading article:', error);
    } finally {
      setLoading(false);
    }
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <div className="h-8 w-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">{Laden...}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
              {Artikel niet gevonden}
            </h1>
            <p className="text-muted-foreground mb-8">
              {Het artikel dat je zoekt bestaat niet of is verwijderd.}
            </p>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {Terug naar nieuws}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px]">
          <img
            src={article.image_url || '/placeholder.svg'}
            alt={article.title}
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
                {Terug naar nieuws}
              </Link>

              {/* Type Badge */}
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1 bg-blue-600 text-white">
                  <Tag className="w-3 h-3" />
                  {Nieuws}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-sm mb-8 pb-8 border-b border-border">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={article.published_at || article.created_at}>
                    {formatDate(article.published_at || article.created_at)}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none text-foreground">
                {article.content.split('\n\n').map((paragraph, index) => {
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
                  {Heb je vragen over dit artikel?}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
                >
                  {Neem contact met ons op} →
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="max-w-5xl mx-auto mt-16">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-8 text-center">
                  {Gerelateerde Artikelen}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => {
                    return (
                      <Link
                        key={related.id}
                        to={`/news/${related.slug}`}
                        className="group bg-card rounded-lg border border-border overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={related.image_url || '/placeholder.svg'}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                          <span className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                            {Nieuws}
                          </span>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                            <Calendar className="w-3 h-3" />
                            <time dateTime={related.published_at || related.created_at}>
                              {formatDate(related.published_at || related.created_at)}
                            </time>
                          </div>
                          <h3 className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {related.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {related.excerpt}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
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
