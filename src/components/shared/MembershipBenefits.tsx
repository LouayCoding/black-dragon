import { useLanguage } from '@/hooks/useLanguage';
import { CheckCircle2, Users, Target, TrendingUp, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MembershipBenefitsProps {
  variant?: 'default' | 'compact' | 'dark';
  className?: string;
}

export function MembershipBenefits({ variant = 'default', className }: MembershipBenefitsProps) {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Award,
      title: t('Geen ervaring nodig', 'No experience needed'),
      description: t('Iedereen kan beginnen', 'Everyone can start'),
    },
    {
      icon: Zap,
      title: t('Gratis proefles', 'Free trial class'),
      description: t('Ervaar het eerst zelf', 'Experience it yourself first'),
    },
    {
      icon: Target,
      title: t('Flexibele lidmaatschappen', 'Flexible memberships'),
      description: t('Voor elk doel een optie', 'An option for every goal'),
    },
    {
      icon: Users,
      title: t('Groepsenergie', 'Group energy'),
      description: t('Trainen motiveert meer samen', 'Training motivates more together'),
    },
    {
      icon: TrendingUp,
      title: t('Resultaatgericht', 'Result-oriented'),
      description: t('Discipline en progressie staan centraal', 'Discipline and progress are central'),
    },
  ];

  const isCompact = variant === 'compact';
  const isDark = variant === 'dark';

  return (
    <div className={cn('grid gap-4', isCompact ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-5', className)}>
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              'flex gap-3 p-4 rounded-lg border transition-all duration-300',
              isDark 
                ? 'bg-korean-black/30 border-primary/20 hover:border-primary/40' 
                : 'bg-card border-border hover:border-primary/30 hover:shadow-md',
              isCompact ? 'flex-row items-start' : 'flex-col items-start'
            )}
          >
            <div className={cn(
              'rounded-lg flex items-center justify-center flex-shrink-0',
              isDark ? 'bg-primary/20' : 'bg-primary/10',
              isCompact ? 'w-10 h-10' : 'w-12 h-12'
            )}>
              <Icon className={cn('text-primary', isCompact ? 'w-5 h-5' : 'w-6 h-6')} />
            </div>
            <div className="flex-1">
              <h4 className={cn(
                'font-semibold mb-1',
                isDark ? 'text-korean-white' : 'text-foreground',
                isCompact ? 'text-sm' : 'text-base'
              )}>
                {benefit.title}
              </h4>
              <p className={cn(
                isDark ? 'text-korean-white/60' : 'text-muted-foreground',
                isCompact ? 'text-xs' : 'text-sm'
              )}>
                {benefit.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
