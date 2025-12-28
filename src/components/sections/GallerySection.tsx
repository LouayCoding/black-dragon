import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(filtersRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
          trigger: filtersRef.current,
          start: 'top 80%',
        },
      });

      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll('.gallery-item');
        gsap.from(items, {
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 75%',
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const galleryItems = [
    { id: 1, category: 'training', title: t('Hoge trap oefening', 'High kick practice'), korean: '차기', image: highKickImg },
    { id: 2, category: 'competition', title: t('Nationaal kampioenschap', 'National championship'), korean: '대회', image: championshipImg },
    { id: 3, category: 'ceremony', title: t('Zwarte band ceremonie', 'Black belt ceremony'), korean: '심사', image: blackBeltCeremonyImg },
    { id: 4, category: 'training', title: t('Poomsae vormen', 'Poomsae forms'), korean: '품새', image: poomsaeImg },
    { id: 5, category: 'youth', title: t('Kleine tijgers les', 'Little tigers class'), korean: '어린이', image: littleTigersImg },
    { id: 6, category: 'competition', title: t('Sparringwedstrijd', 'Sparring match'), korean: '겨루기', image: sparringImg },
    { id: 7, category: 'training', title: t('Breektechniek', 'Breaking technique'), korean: '격파', image: breakingImg },
    { id: 8, category: 'ceremony', title: t('Bandpromotie', 'Belt promotion'), korean: '승급', image: beltPromotionImg },
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
    <section ref={sectionRef} id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div ref={headerRef} className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {t('Galerij', 'Gallery')}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {t('Momenten van', 'Moments of')}<br />
              <span className="text-primary">{t('excellentie', 'excellence')}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div ref={filtersRef} className="flex flex-wrap gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={
                activeCategory === cat.id
                  ? "px-6 py-3 bg-primary text-primary-foreground text-sm font-bold transition-all duration-300"
                  : "px-6 py-3 bg-muted text-foreground/70 text-sm font-semibold hover:bg-muted/80 hover:text-foreground transition-all duration-300"
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="gallery-item group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-base mb-1">{item.title}</p>
                  <p className="text-primary text-2xl font-light">{item.korean}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-secondary-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full">
              <img 
                src={galleryItems.find(i => i.id === selectedImage)?.image}
                alt={galleryItems.find(i => i.id === selectedImage)?.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-secondary-foreground text-center mt-4 text-lg">
                {galleryItems.find(i => i.id === selectedImage)?.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
