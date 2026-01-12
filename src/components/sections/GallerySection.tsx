'use client'

import { useState } from 'react';
import { X } from 'lucide-react';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    { id: 1, category: 'training', title: 'Hoge trap oefening', korean: '차기', image: '/placeholder.svg' },
    { id: 2, category: 'competition', title: 'Nationaal kampioenschap', korean: '대회', image: '/placeholder.svg' },
    { id: 3, category: 'ceremony', title: 'Zwarte band ceremonie', korean: '심사', image: '/placeholder.svg' },
    { id: 4, category: 'training', title: 'Poomsae vormen', korean: '품새', image: '/placeholder.svg' },
    { id: 5, category: 'youth', title: 'Kleine tijgers les', korean: '어린이', image: '/placeholder.svg' },
    { id: 6, category: 'competition', title: 'Sparringwedstrijd', korean: '겨루기', image: '/placeholder.svg' },
    { id: 7, category: 'training', title: 'Breektechniek', korean: '격파', image: '/placeholder.svg' },
    { id: 8, category: 'ceremony', title: 'Bandpromotie', korean: '승급', image: '/placeholder.svg' },
  ];

  const categories = [
    { id: 'all', label: 'Alles' },
    { id: 'training', label: 'Training' },
    { id: 'competition', label: 'Wedstrijd' },
    { id: 'ceremony', label: 'Ceremonies' },
    { id: 'youth', label: 'Jeugd' },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-32 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="mb-24">
          <div className="max-w-3xl space-y-8">
            <div className="inline-block">
              <span className="text-primary font-bold text-xs uppercase tracking-[0.2em]">
                {'Galerij'}
              </span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              {'Momenten van'}<br />
              <span className="text-primary">{'excellentie'}</span>
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-16">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
