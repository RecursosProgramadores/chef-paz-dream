import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    name: 'María Elena Rodríguez',
    role: { es: 'Crítica gastronómica', en: 'Food Critic' },
    text: {
      es: 'Una experiencia que trasciende la gastronomía. Chef Paz logra capturar la esencia misma de la Amazonía en cada plato. El ceviche de paiche fue una revelación absoluta.',
      en: 'An experience that transcends gastronomy. Chef Paz captures the very essence of the Amazon in every dish. The paiche ceviche was an absolute revelation.',
    },
    rating: 5,
  },
  {
    name: 'Carlos Mendoza',
    role: { es: 'Viajero gastronómico', en: 'Food Traveler' },
    text: {
      es: 'He recorrido restaurantes por todo el Perú, pero Chef Paz en Iquitos es simplemente incomparable. La fusión de técnicas modernas con ingredientes ancestrales es magistral.',
      en: 'I have visited restaurants all over Peru, but Chef Paz in Iquitos is simply incomparable. The fusion of modern techniques with ancestral ingredients is masterful.',
    },
    rating: 5,
  },
  {
    name: 'Ana Lucía Torres',
    role: { es: 'Blogger de viajes', en: 'Travel Blogger' },
    text: {
      es: 'Desde el momento en que entras, sientes la magia de la selva. El ambiente, los aromas, los sabores... todo conspira para crear una velada inolvidable. ¡Volveré sin duda!',
      en: 'From the moment you walk in, you feel the magic of the jungle. The ambiance, the aromas, the flavors... everything conspires to create an unforgettable evening. I will definitely return!',
    },
    rating: 5,
  },
  {
    name: 'Roberto Fujimori',
    role: { es: 'Chef ejecutivo, Lima', en: 'Executive Chef, Lima' },
    text: {
      es: 'Como colega, admiro profundamente lo que Maritza ha logrado. Eleva los ingredientes amazónicos a un nivel de sofisticación que pocos han alcanzado. Un orgullo para la cocina peruana.',
      en: 'As a colleague, I deeply admire what Maritza has achieved. She elevates Amazonian ingredients to a level of sophistication few have reached. A pride for Peruvian cuisine.',
    },
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    role: { es: 'Turista francesa', en: 'French Tourist' },
    text: {
      es: 'Vinimos buscando autenticidad amazónica y encontramos mucho más. La degustación de 7 tiempos fue una obra maestra. Cada plato contaba una historia diferente.',
      en: 'We came looking for Amazonian authenticity and found much more. The 7-course tasting was a masterpiece. Each dish told a different story.',
    },
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { lang, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const testimonial = testimonials[current];

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 left-12 text-primary/10">
        <Quote size={120} />
      </div>
      <div className="absolute bottom-12 right-12 text-primary/10 rotate-180">
        <Quote size={80} />
      </div>

      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="font-sans-body text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </AnimatedSection>

        <div className="relative max-w-3xl mx-auto min-h-[320px] flex items-center">
          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-0 md:-left-16 z-10 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-primary/50 transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 md:-right-16 z-10 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-primary/50 transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full px-10 md:px-4"
            >
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonial.text[lang]}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="font-sans-body font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </p>
                  <p className="font-sans-body text-muted-foreground text-sm">
                    {testimonial.role[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-muted-foreground/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
