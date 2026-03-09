import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import pedroImg from '@/assets/testimonio/Pedro_Miguel_Schiaffino.png';
import georgeImg from '@/assets/testimonio/George_Forsyth.png';
import alondraImg from '@/assets/testimonio/alondragarcia.png';

const testimonials = [
  {
    key: 'testimonials.p1',
    image: pedroImg,
    className: "scale-[1.1] md:scale-[1.15]"
  },
  {
    key: 'testimonials.p2',
    image: georgeImg,
    className: "scale-[1.35] md:scale-[1.4]"
  },
  {
    key: 'testimonials.p3',
    image: alondraImg,
    className: "scale-[1.2] md:scale-[1.25]"
  },
];

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-[#FAFAF9] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-[1240px]">
        <AnimatedSection>
          <div className="text-center mb-24 md:mb-40">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
              {t('testimonials.title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto opacity-30" />
          </div>
        </AnimatedSection>

        <div className="space-y-24 md:space-y-40">
          {testimonials.map((testimonial, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection key={i} delay={0.2}>
                <div className={`flex flex-col md:flex-row items-center gap-8 lg:gap-20 transition-all duration-500 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Text Container */}
                  <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                    <div className="flex gap-1.5 mb-2 justify-center md:justify-start">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={18} className="text-primary fill-primary" />
                      ))}
                    </div>

                    <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-[#1A1A1A] leading-[1.4] italic font-medium">
                      "{t(`${testimonial.key}.text`)}"
                    </blockquote>

                    <div className="pt-8">
                      <p className="font-sans-body font-bold text-[#1A1A1A] text-xl lg:text-2xl md:border-l-4 border-primary md:pl-8">
                        {t(`${testimonial.key}.author`)}
                      </p>
                      <p className="font-sans-body text-xs text-[#8E8E8E] uppercase tracking-[0.3em] mt-2 md:pl-8 font-semibold">
                        {t(`${testimonial.key}.role`)}
                      </p>
                    </div>
                  </div>

                  {/* Image Container - Clean Image Only */}
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] flex items-center justify-center group">
                      <motion.div
                        className="relative z-10 w-full h-full flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <img
                          src={testimonial.image}
                          alt={t(`${testimonial.key}.author`)}
                          className={`w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-transform duration-700 ${testimonial.className || ''}`}
                        />
                      </motion.div>
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
