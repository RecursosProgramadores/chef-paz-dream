import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import PageTransition from '@/components/PageTransition';
import TropicalLeaf from '@/components/TropicalLeaf';
import fondohero from '../assets/fondohero.png';
import chefPortrait from '../assets/historia.png';
import amazoniaBg from '../assets/amazonia-bg.jpg';
import perfilpaz from '../assets/perfilpaz.png';
import cocktail from '../assets/cocktail.jpg';
import interior from '../assets/restaurant-interior.jpg';
import dishes1 from '../assets/dishes-grid-1.jpg';
import dishes2 from '../assets/dishes-grid-2.jpg';
import heroDish from '../assets/hero-dish.jpg';
import timelineInnovacion from '../assets/lineatiempo/Premioalainnovacion2023.png';
import timelineTacna24 from '../assets/lineatiempo/PeruMuchoGustoTacnaJulio2024.png';
import timelineSummum from '../assets/lineatiempo/Summun2025.png';
import timelineLima24 from '../assets/lineatiempo/PeruMuchoGustoLima2024.png';
import timelineTacna25 from '../assets/lineatiempo/PeruMuchoGustoTacna2025.png';
import timelineInnovacionAlt from '../assets/lineatiempo/PeruMuchoGustoPremioalainnovacion.png';
import timelineLima23 from '../assets/lineatiempo/PeruMuchoGustoLima2023.png';


const timelineData = [
  { year: '2023', label: 'month.nov', key: 'timeline.2023.nov', image: timelineInnovacion },
  { year: '2024', label: 'month.jul', key: 'timeline.2024.jul', image: timelineTacna24 },
  { year: '2024', label: 'month.sep', key: 'timeline.2024.sep', image: timelineSummum },
  { year: '2024', label: 'month.nov', key: 'timeline.2024.nov', image: timelineLima24 },
  { year: '2025', label: 'month.jul', key: 'timeline.2025.jul', image: timelineTacna25 },
  { year: '2025', label: 'month.sep', key: 'timeline.2025.sep', image: timelineSummum },
  { year: '2025', label: 'month.dec', key: 'timeline.2025.dic.loreto', image: amazoniaBg },
  { year: '2025', label: 'month.dec', key: 'timeline.2025.dic.tenedores', image: interior },
];




const Index = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(timelineData.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="text-lg md:text-xl text-black font-sans-body mb-10 max-w-xl leading-relaxed"
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
                <div className="relative flex justify-center lg:justify-end">
                  <motion.img
                    src={chefPortrait}
                    alt="Chef Gabriel Garhy Nogueira Paz"
                    className="w-full max-w-xl h-auto object-contain z-10"
                    style={{
                      filter: 'drop-shadow(0 35px 50px rgba(98, 62, 39, 0.4))'
                    }}
                    whileHover={{ scale: 1.03, y: -8 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>


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

            <div className="relative group">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-700 ease-in-out"
                  animate={{
                    x: `-${currentIndex * 100}%`,
                  }}
                >
                  {/* Group items by itemsPerView */}
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="flex min-w-full gap-8 md:gap-12 lg:gap-16 px-4">
                      {timelineData
                        .slice(slideIndex * itemsPerView, slideIndex * itemsPerView + itemsPerView)
                        .map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 flex-1 min-w-0 group/item"
                          >
                            {/* Vertical Image Frame */}
                            <div className="w-full md:w-72 lg:w-80 h-[450px] md:h-[500px] flex-shrink-0 border border-white/20 p-1.5 bg-black/40 backdrop-blur-sm shadow-2xl relative overflow-hidden group-hover/item:border-primary/50 transition-all duration-700">
                              <img
                                src={item.image}
                                alt=""
                                className="w-full h-full object-cover grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-105 transition-all duration-1000"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Content Section */}
                            <div className="flex-1 text-center md:text-left pt-2">
                              <div className="flex flex-col gap-1 mb-6">
                                <span className="font-sans font-black text-6xl md:text-7xl lg:text-8xl text-white/5 tracking-tighter group-hover/item:text-primary/10 transition-colors duration-700 block leading-none">
                                  {item.year}
                                </span>
                                <span className="font-sans text-lg md:text-xl text-primary font-bold uppercase tracking-[0.3em]">
                                  {t(item.label)}
                                </span>
                              </div>

                              <div className="h-[2px] w-12 bg-primary/30 mb-6 mx-auto md:mx-0 group-hover/item:w-24 transition-all duration-700" />

                              <p className="font-sans-body text-background/80 text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose">
                                {t(item.key)}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-20 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden xl:flex"
              >
                <ChevronDown className="rotate-90" size={28} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-20 z-20 w-14 h-14 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden xl:flex"
              >
                <ChevronDown className="-rotate-90" size={28} />
              </button>
            </div>

            {/* Individual Item Dots (Guide points) */}
            <div className="mt-24 relative w-full h-[1px] bg-white/10 max-w-5xl mx-auto">
              <div className="absolute inset-0 flex justify-between px-2 md:px-0 -translate-y-1/2">
                {timelineData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const slideIdx = Math.floor(i / itemsPerView);
                      goToSlide(slideIdx);
                    }}
                    className="relative group px-1"
                  >
                    <div className={`w-3 h-3 rounded-full border transition-all duration-700 flex items-center justify-center ${Math.floor(i / itemsPerView) === currentIndex
                        ? "bg-primary border-primary scale-150 rotate-45"
                        : "bg-black border-white/30 group-hover:border-white group-hover:scale-110"
                      }`}>
                      <div className={`w-1 h-1 rounded-full ${Math.floor(i / itemsPerView) === currentIndex ? "bg-white" : "bg-white/20"
                        }`} />
                    </div>

                    {/* Tooltip or small highlight on hover could go here */}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>


      </main>
    </PageTransition>
  );
};

export default Index;
