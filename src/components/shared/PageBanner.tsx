'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export function PageBanner({ title, breadcrumbs, className }: PageBannerProps) {
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: title }
  ];

  const items = breadcrumbs || defaultBreadcrumbs;

  return (
    <div className={cn(
      'relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 py-6 md:py-8',
      className
    )}>
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 bg-black/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs md:text-sm mb-3" aria-label="Breadcrumb">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5">
              {index === 0 && <Home className="w-3.5 h-3.5 md:w-4 md:h-4 text-korean-black/80" />}
              
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-korean-black/90 hover:text-korean-black transition-colors font-medium hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-korean-black/70 font-medium">{item.label}</span>
              )}
              
              {index < items.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-korean-black/50" />
              )}
            </div>
          ))}
        </nav>

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-korean-black leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
}
