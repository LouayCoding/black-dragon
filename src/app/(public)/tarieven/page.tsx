import { PricingSection } from '@/components/sections/PricingSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarieven | Taekwondo Black Dragon',
  description: 'Ontdek onze lidmaatschappen en tarieven. Van basis tot intensief - voor elk niveau en elke ambitie hebben wij een passend trainingsplan.',
};

export default function TarievenPage() {
  return <PricingSection />;
}
