'use client'

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeInView } from '@/components/animations/FadeInView';

type MediaType = 'image' | 'video';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  media: string;
  type: MediaType;
}

const ITEMS_PER_PAGE = 12;

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const galleryItems: GalleryItem[] = [
    // Bandexamens
    { id: 51, category: 'belt-exam', title: 'Groepsactiviteit', media: '/gallery/activiteit-groep.jpg', type: 'image' },
    { id: 52, category: 'belt-exam', title: 'Bandexamen groep', media: '/gallery/bandexamen-groep.jpg', type: 'image' },
    { id: 53, category: 'belt-exam', title: 'Examen moment 1', media: '/gallery/examen-01.jpg', type: 'image' },
    { id: 54, category: 'belt-exam', title: 'Examen moment 2', media: '/gallery/examen-02.jpg', type: 'image' },
    { id: 55, category: 'belt-exam', title: 'Examen moment 3', media: '/gallery/examen-03.jpg', type: 'image' },
    
    // Training
    { id: 2, category: 'training', title: 'Planken breken demonstratie', media: '/gallery/board-breaking-demo.jpg', type: 'image' },
    { id: 3, category: 'training', title: 'Breektechniek oefening', media: '/gallery/breaking-technique.jpg', type: 'image' },
    { id: 4, category: 'training', title: 'Buiten training', media: '/gallery/outdoor-training.jpg', type: 'image' },
    { id: 5, category: 'training', title: 'Hoofdtrainer Rachid', media: '/gallery/rachid.jpeg', type: 'image' },
    { id: 6, category: 'training', title: 'Volwassenen training', media: '/gallery/volwassenen-training.jpg', type: 'image' },
    
    // Wedstrijd
    { id: 7, category: 'competition', title: 'Kampioenen', media: '/gallery/championship-winners.jpg', type: 'image' },
    { id: 8, category: 'competition', title: 'Trofee winnaar', media: '/gallery/trophy-winner.jpg', type: 'image' },
    { id: 9, category: 'competition', title: 'Overwinning viering', media: '/gallery/victory-celebration.jpg', type: 'image' },
    
    // Training
    { id: 10, category: 'training', title: 'Jonge kampioen', media: '/gallery/young-champion.jpg', type: 'image' },
    { id: 11, category: 'training', title: 'Junioren training', media: '/gallery/jeugd-training.jpg', type: 'image' },
    
    // Training momenten
    { id: 12, category: 'training', title: 'Training moment 1', media: '/gallery/training-01.jpg', type: 'image' },
    { id: 13, category: 'training', title: 'Training moment 2', media: '/gallery/training-02.jpg', type: 'image' },
    { id: 14, category: 'training', title: 'Training moment 3', media: '/gallery/training-03.jpg', type: 'image' },
    { id: 15, category: 'training', title: 'Training moment 4', media: '/gallery/training-04.jpg', type: 'image' },
    { id: 16, category: 'training', title: 'Training moment 5', media: '/gallery/training-05.jpg', type: 'image' },
    { id: 17, category: 'training', title: 'Training moment 6', media: '/gallery/training-06.jpg', type: 'image' },
    { id: 18, category: 'training', title: 'Training moment 7', media: '/gallery/training-07.jpg', type: 'image' },
    { id: 19, category: 'training', title: 'Training moment 8', media: '/gallery/training-08.jpg', type: 'image' },
    { id: 20, category: 'training', title: 'Training moment 9', media: '/gallery/training-09.jpg', type: 'image' },
    { id: 21, category: 'training', title: 'Training moment 10', media: '/gallery/training-10.jpg', type: 'image' },
    { id: 22, category: 'training', title: 'Training moment 11', media: '/gallery/training-11.jpg', type: 'image' },
    { id: 23, category: 'training', title: 'Training moment 12', media: '/gallery/training-12.jpg', type: 'image' },
    { id: 24, category: 'training', title: 'Training moment 13', media: '/gallery/training-13.jpg', type: 'image' },
    { id: 25, category: 'training', title: 'Training moment 14', media: '/gallery/training-14.jpg', type: 'image' },
    { id: 26, category: 'training', title: 'Training moment 15', media: '/gallery/training-15.jpg', type: 'image' },
    { id: 27, category: 'training', title: 'Training moment 16', media: '/gallery/training-16.jpg', type: 'image' },
    { id: 28, category: 'training', title: 'Training moment 17', media: '/gallery/training-17.jpg', type: 'image' },
    { id: 29, category: 'training', title: 'Training moment 18', media: '/gallery/training-18.jpg', type: 'image' },
    { id: 30, category: 'training', title: 'Training moment 19', media: '/gallery/training-19.jpg', type: 'image' },
    { id: 31, category: 'training', title: 'Training moment 21', media: '/gallery/training-21.jpg', type: 'image' },
    { id: 32, category: 'training', title: 'Training moment 22', media: '/gallery/training-22.jpg', type: 'image' },
    { id: 33, category: 'training', title: 'Training moment 23', media: '/gallery/training-23.jpg', type: 'image' },
    { id: 34, category: 'training', title: 'Training moment 24', media: '/gallery/training-24.jpg', type: 'image' },
    { id: 35, category: 'training', title: 'Training moment 25', media: '/gallery/training-25.jpg', type: 'image' },
    { id: 36, category: 'training', title: 'Training moment 26', media: '/gallery/training-26.jpg', type: 'image' },
    { id: 37, category: 'training', title: 'Training moment 27', media: '/gallery/training-27.jpg', type: 'image' },
    { id: 38, category: 'training', title: 'Training moment 28', media: '/gallery/training-28.jpg', type: 'image' },
    { id: 39, category: 'training', title: 'Training moment 29', media: '/gallery/training-29.jpg', type: 'image' },
    { id: 40, category: 'training', title: 'Training moment 30', media: '/gallery/training-30.jpg', type: 'image' },
    { id: 41, category: 'training', title: 'Training moment 31', media: '/gallery/training-31.jpg', type: 'image' },
    { id: 42, category: 'training', title: 'Training moment 32', media: '/gallery/training-32.jpg', type: 'image' },
    { id: 43, category: 'training', title: 'Training moment 33', media: '/gallery/training-33.jpg', type: 'image' },
    { id: 44, category: 'training', title: 'Training moment 34', media: '/gallery/training-34.jpg', type: 'image' },
    
    // Video's
    { id: 45, category: 'videos', title: 'Training sessie 1', media: '/videos/video-1.mp4', type: 'video' },
    { id: 46, category: 'videos', title: 'Training sessie 2', media: '/videos/video-2.mp4', type: 'video' },
    { id: 47, category: 'videos', title: 'Techniek demonstratie 1', media: '/videos/video-3.mp4', type: 'video' },
    { id: 48, category: 'videos', title: 'Techniek demonstratie 2', media: '/videos/video-4.mp4', type: 'video' },
    { id: 49, category: 'videos', title: 'Wedstrijd opname 1', media: '/videos/video-5.mp4', type: 'video' },
    { id: 50, category: 'videos', title: 'Wedstrijd opname 2', media: '/videos/video-6.mp4', type: 'video' },
  ];

  const categories = [
    { id: 'all', label: 'Alles' },
    { id: 'training', label: 'Training' },
    { id: 'competition', label: 'Wedstrijd' },
    { id: 'belt-exam', label: 'Bandexamens' },
    { id: 'videos', label: "Video's" },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const selectedMedia = useMemo(() => 
    galleryItems.find(i => i.id === selectedItem) || null,
    [selectedItem]
  );

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <FadeInView className="mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-8">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
              Galerij
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Foto&apos;s &amp;<br />
              <span className="text-primary">video&apos;s</span>
            </h2>
          </div>
        </FadeInView>

        {/* Filter Tabs */}
        <FadeInView delay={0.1} className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={
                activeCategory === cat.id
                  ? "px-4 py-2 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-full transition-all duration-300"
                  : "px-4 py-2 bg-card border border-border text-foreground/60 text-xs sm:text-sm font-medium rounded-full hover:border-primary/30 hover:text-foreground transition-all duration-300"
              }
            >
              {cat.label}
              <span className="ml-1.5 text-[10px] opacity-60">
                {cat.id === 'all' ? galleryItems.length : galleryItems.filter(i => i.category === cat.id).length}
              </span>
            </button>
          ))}
        </FadeInView>

        {/* Gallery Grid */}
        <FadeInView delay={0.2} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {visibleItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className="group relative aspect-square overflow-hidden cursor-pointer rounded-lg"
            >
              {item.type === 'image' ? (
                <Image 
                  src={item.media} 
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="relative w-full h-full bg-black">
                  <video 
                    src={item.media}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-black ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                )}
                <div className="p-3 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <p className="text-white text-xs font-medium truncate">{item.title}</p>
                </div>
              </div>
            </button>
          ))}
        </FadeInView>

        {/* Load More */}
        {hasMore && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
              className="rounded-lg"
            >
              Meer laden ({filteredItems.length - visibleCount} resterend)
            </Button>
          </div>
        )}

        {/* Lightbox */}
        {selectedMedia && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              onClick={() => setSelectedItem(null)}
            >
              <X size={28} />
            </button>
            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.type === 'image' ? (
                <Image 
                  src={selectedMedia.media}
                  alt={selectedMedia.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <video 
                  src={selectedMedia.media}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
