import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PageTransition from '@/components/PageTransition';
import fondohero from '../assets/fondohero.png';
import chefPortrait from '../assets/historia.png';
import amazoniaBg from '../assets/amazonia-bg.jpg';
import perfilpaz from '../assets/perfilpaz.png';
import cocktail from '../assets/cocktail.jpg';
import interior from '../assets/restaurant-interior.jpg';
import dishes1 from '../assets/dishes-grid-1.jpg';
import dishes2 from '../assets/dishes-grid-2.jpg';
import heroDish from '../assets/hero-dish.jpg';


const timelineData = [
  { year: '2023', label: 'Nov', key: 'timeline.2023.nov', image: heroDish },
  { year: '2024', label: 'Jul', key: 'timeline.2024.jul', image: interior },
  { year: '2024', label: 'Set', key: 'timeline.2024.sep', image: dishes1 },
  { year: '2024', label: 'Nov', key: 'timeline.2024.nov', image: cocktail },
  { year: '2025', label: 'Jul', key: 'timeline.2025.jul', image: dishes2 },
  { year: '2025', label: 'Set', key: 'timeline.2025.sep', image: heroDish },
  { year: '2025', label: 'Dic', key: 'timeline.2025.dic.loreto', image: amazoniaBg },
  { year: '2025', label: 'Dic', key: 'timeline.2025.dic.tenedores', image: interior },
];


const TropicalLeaf = ({ className, delay = 0, scale = 1, rotate = 0 }: { className?: string, delay?: number, scale?: number, rotate?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, rotate: rotate - 20 }}
    animate={{
      opacity: 0.6,
      scale: scale,
      rotate: [rotate - 5, rotate + 5, rotate - 5],
      y: [0, -15, 0]
    }}
    transition={{
      opacity: { duration: 1, delay },
      scale: { duration: 1, delay },
      rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }
    }}
    className={`absolute pointer-events-none drop-shadow-xl ${className}`}
  >
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-secondary/30">
      <path d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90 C70 90 90 70 90 50 C90 30 70 10 50 10 Z M50 20 C65 20 78 32 78 47 L78 53 C78 68 65 80 50 80 C35 80 22 68 22 53 L22 47 C22 32 35 20 50 20 Z" />
      <path d="M50 15 L50 85 M50 30 L75 25 M50 45 L80 40 M50 60 L75 55 M50 30 L25 25 M50 45 L20 40 M50 60 L25 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </motion.div>
);

const Index = () => {
  const { t } = useLanguage();

  // Parallax for hero
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroProgress, [0, 1], ['0%', '5%']);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.05]);
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
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: heroY, scale: heroScale }}
          >
            <img
              src={fondohero}
              alt="Chef Paz - Fondo Gastronómico"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                style={{ y: heroTextY, opacity: heroOpacity }}
                className="text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
                >
                  Chef Paz
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="font-serif italic text-primary text-xl md:text-2xl lg:text-3xl mb-4"
                >
                  {t('hero.slogan')}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="font-sans-body text-muted-foreground text-base md:text-lg mb-10 max-w-xl"
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
                    className="bg-cta text-cta-foreground px-10 py-4 rounded-md font-sans-body font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-cta/10 text-center"
                  >
                    {t('hero.cta')}
                  </Link>
                  <a
                    href="#historia"
                    className="border border-foreground/20 text-foreground px-10 py-4 rounded-md font-sans-body font-semibold text-sm uppercase tracking-widest hover:bg-foreground/5 transition-colors backdrop-blur-[2px] text-center"
                  >
                    {t('hero.discover')}
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(15px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="hidden lg:block relative"
              >
                <div className="relative z-10 group">
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative z-20"
                  >
                    <img
                      src={perfilpaz}
                      alt="Chef Gabriel Garhy Nogueira Paz"
                      className="w-full max-w-lg mx-auto h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    {/* Professional reflection/shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none rounded-full" />
                  </motion.div>

                  {/* Amazonian Decorative Leaves */}
                  <TropicalLeaf className="top-0 -left-10 w-32 h-32" rotate={-45} delay={1} scale={1.2} />
                  <TropicalLeaf className="bottom-20 -right-12 w-40 h-40" rotate={30} delay={1.4} scale={1.5} />
                  <TropicalLeaf className="top-1/3 -right-8 w-24 h-24" rotate={160} delay={1.8} scale={0.8} />
                  <TropicalLeaf className="-bottom-10 left-10 w-28 h-28" rotate={-15} delay={2.2} scale={1.1} />
                </div>

                {/* Spectacular Jungle Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 blur-[150px] rounded-full -z-0 opacity-40 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-accent/15 blur-[100px] rounded-full -z-0" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/10 blur-[80px] rounded-full -z-0" />
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40"
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
                    alt="Chef Gabriel Garhy Nogueira Paz"
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

        {/* Timeline with Multiple Items - Reference Structure */}
        <section ref={timelineRef} className="py-24 md:py-32 relative overflow-hidden bg-black/95">
          <motion.div className="absolute inset-0 opacity-10" style={{ y: timelineBgY }}>
            <img src={amazoniaBg} alt="" className="w-full h-full object-cover scale-110 blur-sm" />
          </motion.div>

          <div className="relative z-10 container mx-auto px-6">
            <AnimatedSection>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-background text-center mb-20">
                {t('timeline.title')}
              </h2>
            </AnimatedSection>

            <div className="relative overflow-hidden group">
              {/* Infinite Horizontal Scroll Container */}
              <motion.div
                className="flex gap-20 md:gap-32 px-4 whitespace-nowrap"
                animate={{
                  x: [0, "-50%"],
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
                whileHover={{ animationPlayState: 'paused' }}
              >
                {/* Double the data for seamless infinite loop */}
                {[...timelineData, ...timelineData].map((item, i) => (
                  <div key={i} className="flex flex-col w-[300px] md:w-[450px] lg:w-[550px] flex-shrink-0">
                    {/* Year at the top */}
                    <span className="font-sans font-bold text-6xl md:text-7xl lg:text-8xl text-white/20 mb-6 tracking-tighter">
                      {item.year}
                    </span>

                    {/* Image Frame and Description side-by-side */}
                    <div className="flex items-start gap-6 group/item">
                      <div className="w-40 h-28 md:w-52 md:h-36 flex-shrink-0 border border-white/30 p-1 bg-black/40 backdrop-blur-sm shadow-xl relative overflow-hidden">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-full object-cover grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700"
                        />
                      </div>
                      <div className="flex-1 pt-1 whitespace-normal">
                        <span className="font-sans text-base text-primary/80 font-bold block mb-2 uppercase tracking-widest">
                          {item.label}
                        </span>
                        <p className="font-sans-body text-background/80 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-4">
                          {t(item.key)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Progress Line at bottom (as seen in reference) */}
            <div className="mt-12 relative w-full h-[1px] bg-white/20">
              <div className="absolute inset-0 flex justify-between px-6 -translate-y-1/2">
                {timelineData.map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full bg-black border border-white/60 z-10 group cursor-pointer hover:border-white transition-colors flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                  </div>
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
    </PageTransition>
  );
};

export default Index;
