import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import heroDish from '@/assets/hero-dish.jpg';
import chefPortrait from '@/assets/chef-portrait.jpg';
import amazoniaBg from '@/assets/amazonia-bg.jpg';

const timelineData = [
  { year: '2013', key: 'timeline.2013' },
  { year: '2015', key: 'timeline.2015' },
  { year: '2017', key: 'timeline.2017' },
  { year: '2019', key: 'timeline.2019' },
  { year: '2021', key: 'timeline.2021' },
  { year: '2024', key: 'timeline.2024' },
];

const Index = () => {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroDish} alt="Plato amazónico de Chef Paz" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 leading-tight"
          >
            Chef Paz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-serif italic text-accent text-xl md:text-2xl lg:text-3xl mb-4"
          >
            {t('hero.slogan')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-sans-body text-background/70 text-base md:text-lg mb-10 max-w-2xl mx-auto"
          >
            {t('hero.tagline')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/reserva"
              className="bg-cta text-cta-foreground px-10 py-4 rounded-md font-sans-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              {t('hero.cta')}
            </Link>
            <a
              href="#historia"
              className="border border-background/30 text-background px-10 py-4 rounded-md font-sans-body font-semibold text-sm uppercase tracking-widest hover:bg-background/10 transition-colors"
            >
              {t('hero.discover')}
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/50"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.div>
      </section>

      {/* Story */}
      <section id="historia" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
                {t('story.title')}
              </h2>
              <p className="font-sans-body text-muted-foreground leading-relaxed text-lg mb-6">
                {t('story.p1')}
              </p>
              <p className="font-sans-body text-muted-foreground leading-relaxed text-lg">
                {t('story.p2')}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src={chefPortrait}
                  alt="Chef Maritza Paz"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-lg -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={amazoniaBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <AnimatedSection>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-background text-center mb-16">
              {t('timeline.title')}
            </h2>
          </AnimatedSection>

          {/* Horizontal scroll timeline */}
          <div className="overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-8 min-w-max">
              {timelineData.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 0.15} className="flex-shrink-0 w-72">
                  <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8 border border-background/10 hover:border-primary/50 transition-colors group">
                    <span className="font-serif text-5xl font-bold text-primary block mb-4 group-hover:text-accent transition-colors">
                      {item.year}
                    </span>
                    <p className="font-sans-body text-background/80 text-sm leading-relaxed">
                      {t(item.key)}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t('hero.cta')}
          </h2>
          <p className="font-sans-body text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            {t('hero.tagline')}
          </p>
          <Link
            to="/reserva"
            className="inline-block bg-cta text-cta-foreground px-12 py-4 rounded-md font-sans-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            {t('nav.reservar')}
          </Link>
        </AnimatedSection>
      </section>
    </main>
  );
};

export default Index;
