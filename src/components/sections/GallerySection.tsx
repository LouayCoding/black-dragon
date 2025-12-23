import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const galleryItems = [
  { id: 1, category: 'training', title: 'High Kick Practice', korean: '차기' },
  { id: 2, category: 'competition', title: 'National Championship', korean: '대회' },
  { id: 3, category: 'ceremony', title: 'Black Belt Ceremony', korean: '심사' },
  { id: 4, category: 'training', title: 'Poomsae Forms', korean: '품새' },
  { id: 5, category: 'youth', title: 'Little Tigers Class', korean: '어린이' },
  { id: 6, category: 'competition', title: 'Sparring Match', korean: '겨루기' },
  { id: 7, category: 'training', title: 'Breaking Technique', korean: '격파' },
  { id: 8, category: 'ceremony', title: 'Belt Promotion', korean: '승급' },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'training', label: 'Training' },
  { id: 'competition', label: 'Competition' },
  { id: 'ceremony', label: 'Ceremonies' },
  { id: 'youth', label: 'Youth' },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-background relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Header */}
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-12 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-primary font-medium tracking-widest text-sm mb-4">갤러리 GALLERY</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Moments of <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Capturing the spirit, dedication, and achievements of our Taekwondo community.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={cn(
          "flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={cn(
          "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 delay-200",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-dark cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-4xl text-primary/30 group-hover:text-primary/50 transition-colors">
                  {item.korean}
                </span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-secondary-foreground font-medium text-sm">{item.title}</p>
                  <p className="text-secondary-foreground/60 text-xs">{item.korean}</p>
                </div>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-colors" />
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
            <div className="max-w-4xl w-full aspect-video bg-gradient-dark rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="font-serif text-8xl text-primary/30">
                  {galleryItems.find(i => i.id === selectedImage)?.korean}
                </span>
                <p className="text-secondary-foreground mt-4">
                  {galleryItems.find(i => i.id === selectedImage)?.title}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
