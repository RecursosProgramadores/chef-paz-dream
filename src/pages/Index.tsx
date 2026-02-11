import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PageTransition from '@/components/PageTransition';
import heroDish from '@/assets/hero-dish.jpg';
import chefPortrait from '@/assets/chef-portrait.jpg';
import amazoniaBg from '@/assets/amazonia-bg.jpg';
import perfilpaz from '@/assets/perfilpaz.png';

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

  // Parallax for hero
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '30%']);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroTextY = useTransform(heroProgress, [0, 1], ['0%', '50%']);

  // Parallax for timeline
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  });
  const timelineBgY = useTransform(timelineProgress, [0, 1], ['0%', '20%']);

  return (
    <PageTransition>
      <main>
        {/* Hero with Parallax */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
            <img src={heroDish} alt="Plato amazónico de Chef Paz" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/60" />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                style={{ y: heroTextY, opacity: heroOpacity }}
                className="text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-background mb-6 leading-tight"
                >
                  Chef Paz
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="font-serif italic text-accent text-xl md:text-2xl lg:text-3xl mb-4"
                >
                  {t('hero.slogan')}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="font-sans-body text-background/70 text-base md:text-lg mb-10 max-w-xl"
                >
                  {t('hero.tagline')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link
                    to="/reserva"
                    className="bg-cta text-cta-foreground px-10 py-4 rounded-md font-sans-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity text-center"
                  >
                    {t('hero.cta')}
                  </Link>
                  <a
                    href="#historia"
                    className="border border-background/30 text-background px-10 py-4 rounded-md font-sans-body font-semibold text-sm uppercase tracking-widest hover:bg-background/10 transition-colors text-center"
                  >
                    {t('hero.discover')}
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="hidden lg:block relative"
              >
                <div className="relative z-10">
                  <img
                    src={perfilpaz}
                    alt="Chef Maritza Paz"
                    className="w-full max-w-lg mx-auto h-auto object-contain drop-shadow-2xl"
                  />
                </div>
                {/* Decorative background for the image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-3xl rounded-full -z-0" />
              </motion.div>
            </div>
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
                  <motion.img
                    src={chefPortrait}
                    alt="Chef Maritza Paz"
                    className="rounded-lg shadow-2xl w-full max-w-md mx-auto object-cover aspect-[3/4]"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-lg -z-10" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/30 rounded-lg -z-10" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Timeline with Parallax bg */}
        <section ref={timelineRef} className="py-24 md:py-32 relative overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: timelineBgY }}>
            <img src={amazoniaBg} alt="" className="w-full h-full object-cover scale-110" />
            <div className="absolute inset-0 bg-foreground/80" />
          </motion.div>
          <div className="relative z-10 container mx-auto px-6">
            <AnimatedSection>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-background text-center mb-16">
                {t('timeline.title')}
              </h2>
            </AnimatedSection>

            <div className="relative overflow-hidden -mx-6 px-6 group">
              <motion.div
                className="flex gap-8 w-max pointer-events-auto"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity
                }}
                whileHover={{ animationPlayState: "paused" }}
                style={{ cursor: 'grab' }}
              >
                {[...timelineData, ...timelineData].map((item, i) => (
                  <div key={`${item.year}-${i}`} className="flex-shrink-0 w-80">
                    <motion.div
                      className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 group/card"
                      whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <span className="font-serif text-5xl font-bold text-primary block mb-4 group-hover/card:text-accent transition-colors">
                        {item.year}
                      </span>
                      <p className="font-sans-body text-background/90 text-base leading-relaxed">
                        {t(item.key)}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* Fade gradients for smooth entry/exit */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-foreground/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-foreground/80 to-transparent z-20 pointer-events-none" />
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
    </PageTransition>
  );
};

export default Index;
