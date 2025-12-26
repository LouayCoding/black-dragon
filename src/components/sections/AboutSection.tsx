import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import sparringImg from '@/assets/gallery/sparring.jpg';
import highKickImg from '@/assets/gallery/high-kick.jpg';
import littleTigersImg from '@/assets/gallery/little-tigers.jpg';

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div ref={sectionRef} className="container mx-auto px-4">
        {/* Content First */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-widest text-sm mb-4">{t('OVER ONS', 'ABOUT US')}</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t('Traditie Eren,', 'Honoring Tradition,')}<br />
            <span className="text-primary">{t('Kampioenen Bouwen', 'Building Champions')}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {t(
              'Onze dojang is meer dan een trainingscentrum—het is een gemeenschap gewijd aan de authentieke beoefening van Taekwondo. Met 25+ jaar ervaring combineren we eeuwenoude technieken met moderne trainingsmethoden.',
              'Our dojang is more than a training center—it is a community dedicated to the authentic practice of Taekwondo. With 25+ years of experience, we blend time-honored techniques with modern training methodologies.'
            )}
          </p>
        </motion.div>

        {/* Image Showcase Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { img: sparringImg, title: t('Sparring', 'Sparring'), desc: t('Wedstrijdvoorbereiding', 'Competition prep') },
            { img: highKickImg, title: t('Technieken', 'Techniques'), desc: t('Perfecte uitvoering', 'Perfect execution') },
            { img: littleTigersImg, title: t('Jeugd', 'Youth'), desc: t('Vanaf 4 jaar', 'From age 4') },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-border shadow-lg">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-korean-white">
                  <h3 className="font-serif text-2xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-korean-white/80">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16"
        >
          {[
            { value: '25+', label: t('Jaar Ervaring', 'Years Experience') },
            { value: '500+', label: t('Studenten', 'Students') },
            { value: '2', label: t('Locaties', 'Locations') },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values - Horizontal */}
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">

          {[
                { korean: '예의', english: t('Beleefdheid', 'Courtesy'), desc: t('Respect in alle interacties', 'Respect in all interactions') },
                { korean: '염치', english: t('Integriteit', 'Integrity'), desc: t('Eerlijkheid en sterke moraal', 'Honesty and strong morals') },
                { korean: '인내', english: t('Doorzettingsvermogen', 'Perseverance'), desc: t('Nooit opgeven mentaliteit', 'Never give up spirit') },
                { korean: '극기', english: t('Zelfbeheersing', 'Self-Control'), desc: t('Beheers je emoties', 'Master your emotions') },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group text-center"
            >
              <p className="text-primary font-serif text-3xl mb-2 group-hover:scale-110 transition-transform inline-block">
                {value.korean}
              </p>
              <p className="font-semibold text-foreground mb-1">{value.english}</p>
              <p className="text-xs text-muted-foreground">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
