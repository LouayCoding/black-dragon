import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function MobileCTA() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-korean-black via-korean-black to-korean-black/95 p-4 shadow-2xl z-50 lg:hidden border-t border-primary/20"
    >
      <div className="flex gap-3">
        <Button
          asChild
          size="lg"
          className="flex-1 bg-primary hover:bg-accent text-primary-foreground font-semibold"
        >
          <Link href="/register" className="flex items-center justify-center gap-2">
            🥋 Gratis Proefles
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-primary/30 text-korean-white hover:bg-primary/10"
        >
          <a href="tel:0201234567" className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Bel
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
