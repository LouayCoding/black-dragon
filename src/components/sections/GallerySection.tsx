'use client'

import { useState } from 'react';
import { X, Play } from 'lucide-react';
import { FadeInView } from '@/components/animations/FadeInView';

type MediaType = 'image' | 'video';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  korean: string;
  media: string;
  type: MediaType;
  thumbnail?: string;
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    // Echte afbeeldingen - Ceremonies
    { id: 1, category: 'ceremony', title: 'Band ceremonie groep', korean: '승급식', media: '/gallery/belt-ceremony-group.jpg', type: 'image' },
    
    // Bandexamens
    { id: 51, category: 'belt-exam', title: 'Groepsactiviteit', korean: '단체 활동', media: '/gallery/activiteit-groep.jpg', type: 'image' },
    { id: 52, category: 'belt-exam', title: 'Bandexamen groep', korean: '승급 시험', media: '/gallery/bandexamen-groep.jpg', type: 'image' },
    { id: 53, category: 'belt-exam', title: 'Examen moment 1', korean: '승급 시험', media: '/gallery/examen-01.jpg', type: 'image' },
    { id: 54, category: 'belt-exam', title: 'Examen moment 2', korean: '승급 시험', media: '/gallery/examen-02.jpg', type: 'image' },
    { id: 55, category: 'belt-exam', title: 'Examen moment 3', korean: '승급 시험', media: '/gallery/examen-03.jpg', type: 'image' },
    
    // Echte afbeeldingen - Training
    { id: 2, category: 'training', title: 'Planken breken demonstratie', korean: '격파', media: '/gallery/board-breaking-demo.jpg', type: 'image' },
    { id: 3, category: 'training', title: 'Breektechniek oefening', korean: '격파 기술', media: '/gallery/breaking-technique.jpg', type: 'image' },
    { id: 4, category: 'training', title: 'Buiten training', korean: '훈련', media: '/gallery/outdoor-training.jpg', type: 'image' },
    { id: 5, category: 'training', title: 'Hoofdtrainer Rachid', korean: '수석 코치', media: '/gallery/rachid.jpeg', type: 'image' },
    { id: 6, category: 'training', title: 'Volwassenen training', korean: '성인 훈련', media: '/gallery/volwassenen-training.jpg', type: 'image' },
    
    // Echte afbeeldingen - Wedstrijd
    { id: 7, category: 'competition', title: 'Kampioenen', korean: '챔피언', media: '/gallery/championship-winners.jpg', type: 'image' },
    { id: 8, category: 'competition', title: 'Trofee winnaar', korean: '승리', media: '/gallery/trophy-winner.jpg', type: 'image' },
    { id: 9, category: 'competition', title: 'Overwinning viering', korean: '축하', media: '/gallery/victory-celebration.jpg', type: 'image' },
    
    // Echte afbeeldingen - Training (voorheen Jeugd)
    { id: 10, category: 'training', title: 'Jonge kampioen', korean: '우승자', media: '/gallery/young-champion.jpg', type: 'image' },
    { id: 11, category: 'training', title: 'Jeugd training', korean: '청소년 훈련', media: '/gallery/jeugd-training.jpg', type: 'image' },
    
    // Nieuwe training afbeeldingen (training-01 t/m training-34)
    { id: 12, category: 'training', title: 'Training moment 1', korean: '훈련', media: '/gallery/training-01.jpg', type: 'image' },
    { id: 13, category: 'training', title: 'Training moment 2', korean: '훈련', media: '/gallery/training-02.jpg', type: 'image' },
    { id: 14, category: 'training', title: 'Training moment 3', korean: '훈련', media: '/gallery/training-03.jpg', type: 'image' },
    { id: 15, category: 'training', title: 'Training moment 4', korean: '훈련', media: '/gallery/training-04.jpg', type: 'image' },
    { id: 16, category: 'training', title: 'Training moment 5', korean: '훈련', media: '/gallery/training-05.jpg', type: 'image' },
    { id: 17, category: 'training', title: 'Training moment 6', korean: '훈련', media: '/gallery/training-06.jpg', type: 'image' },
    { id: 18, category: 'training', title: 'Training moment 7', korean: '훈련', media: '/gallery/training-07.jpg', type: 'image' },
    { id: 19, category: 'training', title: 'Training moment 8', korean: '훈련', media: '/gallery/training-08.jpg', type: 'image' },
    { id: 20, category: 'training', title: 'Training moment 9', korean: '훈련', media: '/gallery/training-09.jpg', type: 'image' },
    { id: 21, category: 'training', title: 'Training moment 10', korean: '훈련', media: '/gallery/training-10.jpg', type: 'image' },
    { id: 22, category: 'training', title: 'Training moment 11', korean: '훈련', media: '/gallery/training-11.jpg', type: 'image' },
    { id: 23, category: 'training', title: 'Training moment 12', korean: '훈련', media: '/gallery/training-12.jpg', type: 'image' },
    { id: 24, category: 'training', title: 'Training moment 13', korean: '훈련', media: '/gallery/training-13.jpg', type: 'image' },
    { id: 25, category: 'training', title: 'Training moment 14', korean: '훈련', media: '/gallery/training-14.jpg', type: 'image' },
    { id: 26, category: 'training', title: 'Training moment 15', korean: '훈련', media: '/gallery/training-15.jpg', type: 'image' },
    { id: 27, category: 'training', title: 'Training moment 16', korean: '훈련', media: '/gallery/training-16.jpg', type: 'image' },
    { id: 28, category: 'training', title: 'Training moment 17', korean: '훈련', media: '/gallery/training-17.jpg', type: 'image' },
    { id: 29, category: 'training', title: 'Training moment 18', korean: '훈련', media: '/gallery/training-18.jpg', type: 'image' },
    { id: 30, category: 'training', title: 'Training moment 19', korean: '훈련', media: '/gallery/training-19.jpg', type: 'image' },
    { id: 31, category: 'training', title: 'Training moment 21', korean: '훈련', media: '/gallery/training-21.jpg', type: 'image' },
    { id: 32, category: 'training', title: 'Training moment 22', korean: '훈련', media: '/gallery/training-22.jpg', type: 'image' },
    { id: 33, category: 'training', title: 'Training moment 23', korean: '훈련', media: '/gallery/training-23.jpg', type: 'image' },
    { id: 34, category: 'training', title: 'Training moment 24', korean: '훈련', media: '/gallery/training-24.jpg', type: 'image' },
    { id: 35, category: 'training', title: 'Training moment 25', korean: '훈련', media: '/gallery/training-25.jpg', type: 'image' },
    { id: 36, category: 'training', title: 'Training moment 26', korean: '훈련', media: '/gallery/training-26.jpg', type: 'image' },
    { id: 37, category: 'training', title: 'Training moment 27', korean: '훈련', media: '/gallery/training-27.jpg', type: 'image' },
    { id: 38, category: 'training', title: 'Training moment 28', korean: '훈련', media: '/gallery/training-28.jpg', type: 'image' },
    { id: 39, category: 'training', title: 'Training moment 29', korean: '훈련', media: '/gallery/training-29.jpg', type: 'image' },
    { id: 40, category: 'training', title: 'Training moment 30', korean: '훈련', media: '/gallery/training-30.jpg', type: 'image' },
    { id: 41, category: 'training', title: 'Training moment 31', korean: '훈련', media: '/gallery/training-31.jpg', type: 'image' },
    { id: 42, category: 'training', title: 'Training moment 32', korean: '훈련', media: '/gallery/training-32.jpg', type: 'image' },
    { id: 43, category: 'training', title: 'Training moment 33', korean: '훈련', media: '/gallery/training-33.jpg', type: 'image' },
    { id: 44, category: 'training', title: 'Training moment 34', korean: '훈련', media: '/gallery/training-34.jpg', type: 'image' },
    
    // Video's
    { id: 45, category: 'videos', title: 'Training sessie 1', korean: '훈련 영상', media: '/videos/video-1.mp4', type: 'video' },
    { id: 46, category: 'videos', title: 'Training sessie 2', korean: '훈련 영상', media: '/videos/video-2.mp4', type: 'video' },
    { id: 47, category: 'videos', title: 'Techniek demonstratie 1', korean: '기술 시연', media: '/videos/video-3.mp4', type: 'video' },
    { id: 48, category: 'videos', title: 'Techniek demonstratie 2', korean: '기술 시연', media: '/videos/video-4.mp4', type: 'video' },
    { id: 49, category: 'videos', title: 'Wedstrijd opname 1', korean: '대회 영상', media: '/videos/video-5.mp4', type: 'video' },
    { id: 50, category: 'videos', title: 'Wedstrijd opname 2', korean: '대회 영상', media: '/videos/video-6.mp4', type: 'video' },
  ];

  const categories = [
    { id: 'all', label: 'Alles' },
    { id: 'training', label: 'Training' },
    { id: 'competition', label: 'Wedstrijd' },
    { id: 'belt-exam', label: 'Bandexamens' },
    { id: 'ceremony', label: 'Activiteiten' },
    { id: 'videos', label: "Video's" },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <FadeInView className="mb-16">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">
                Galerij
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Momenten van<br />
              <span className="text-primary">excellentie</span>
            </h2>
          </div>
        </FadeInView>

        {/* Filter Tabs */}
        <FadeInView delay={0.2} className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={
                activeCategory === cat.id
                  ? "px-3 sm:px-4 py-2 bg-foreground text-background text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300"
                  : "px-3 sm:px-4 py-2 bg-muted text-foreground/60 text-xs sm:text-sm font-medium rounded-lg hover:bg-muted/80 hover:text-foreground transition-all duration-300"
              }
            >
              {cat.label}
            </button>
          ))}
        </FadeInView>

        {/* Gallery Grid */}
        <FadeInView delay={0.3} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
              className="gallery-item group relative aspect-square overflow-hidden cursor-pointer rounded-lg"
            >
              {item.type === 'image' ? (
                <img 
                  src={item.media} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video 
                    src={item.media}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-foreground ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}
            </button>
          ))}
        </FadeInView>

        {/* Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-secondary-foreground hover:text-primary transition-colors z-10"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              {galleryItems.find(i => i.id === selectedItem)?.type === 'image' ? (
                <img 
                  src={galleryItems.find(i => i.id === selectedItem)?.media}
                  alt={galleryItems.find(i => i.id === selectedItem)?.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <video 
                  src={galleryItems.find(i => i.id === selectedItem)?.media}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              )}
              <p className="text-secondary-foreground text-center mt-4 text-lg">
                {galleryItems.find(i => i.id === selectedItem)?.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
