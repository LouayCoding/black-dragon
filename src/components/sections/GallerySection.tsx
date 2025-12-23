import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import gallery images
import highKickImg from '@/assets/gallery/high-kick.jpg';
import championshipImg from '@/assets/gallery/championship.jpg';
import blackBeltCeremonyImg from '@/assets/gallery/black-belt-ceremony.jpg';
import poomsaeImg from '@/assets/gallery/poomsae.jpg';
import littleTigersImg from '@/assets/gallery/little-tigers.jpg';
import sparringImg from '@/assets/gallery/sparring.jpg';
import breakingImg from '@/assets/gallery/breaking.jpg';
import beltPromotionImg from '@/assets/gallery/belt-promotion.jpg';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  const galleryItems = [
    { id: 1, category: 'training', title: t('Hoge Trap Oefening', 'High Kick Practice'), korean: '차기', image: highKickImg },
    { id: 2, category: 'competition', title: t('Nationaal Kampioenschap', 'National Championship'), korean: '대회', image: championshipImg },
    { id: 3, category: 'ceremony', title: t('Zwarte Band Ceremonie', 'Black Belt Ceremony'), korean: '심사', image: blackBeltCeremonyImg },
    { id: 4, category: 'training', title: t('Poomsae Vormen', 'Poomsae Forms'), korean: '품새', image: poomsaeImg },
    { id: 5, category: 'youth', title: t('Kleine Tijgers Les', 'Little Tigers Class'), korean: '어린이', image: littleTigersImg },
    { id: 6, category: 'competition', title: t('Sparringwedstrijd', 'Sparring Match'), korean: '겨루기', image: sparringImg },
    { id: 7, category: 'training', title: t('Breektechniek', 'Breaking Technique'), korean: '격파', image: breakingImg },
    { id: 8, category: 'ceremony', title: t('Bandpromotie', 'Belt Promotion'), korean: '승급', image: beltPromotionImg },
  ];

  const categories = [
    { id: 'all', label: t('Alles', 'All') },
    { id: 'training', label: t('Training', 'Training') },
    { id: 'competition', label: t('Wedstrijd', 'Competition') },
    { id: 'ceremony', label: t('Ceremonies', 'Ceremonies') },
    { id: 'youth', label: t('Jeugd', 'Youth') },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-32 bg-muted/30 relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <span className="inline-block text-primary font-medium tracking-[0.2em] text-sm mb-6">
            {t('GALERIJ', 'GALLERY')}
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            {t('Momenten van ', 'Moments of ')}<span className="text-primary">{t('Excellentie', 'Excellence')}</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl">
            {t(
              'Het vastleggen van de geest en prestaties van onze Taekwondo gemeenschap.',
              'Capturing the spirit and achievements of our Taekwondo community.'
            )}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={cn(
          "flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-muted-foreground hover:bg-card hover:text-foreground hover:shadow-md"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 transition-all duration-700 delay-200",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer img-zoom"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-secondary-foreground font-semibold">{item.title}</p>
                  <p className="text-primary text-sm font-serif">{item.korean}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className={cn(
          "text-center mt-16 transition-all duration-700 delay-400",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        )}>
          <p className="text-muted-foreground mb-6">
            {t('Wil je deel uitmaken van onze gemeenschap?', 'Want to be part of our community?')}
          </p>
          <Button
            asChild
            size="lg"
            className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full group"
          >
            <a href="#contact" className="flex items-center gap-2">
              {t('Word Lid', 'Join Us')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-secondary/98 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img 
                src={galleryItems.find(i => i.id === selectedImage)?.image}
                alt={galleryItems.find(i => i.id === selectedImage)?.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="text-center mt-6">
                <p className="text-secondary-foreground text-xl font-semibold">
                  {galleryItems.find(i => i.id === selectedImage)?.title}
                </p>
                <p className="text-primary font-serif text-lg mt-1">
                  {galleryItems.find(i => i.id === selectedImage)?.korean}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}