import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import testimonioImg from '@/assets/testimonio.png';

const testimonials = [
  {
    key: 'testimonials.p1',
    blobPath: "M63.5,-52.7C77.4,-38.3,80.4,-11.2,74.1,11.5C67.8,34.2,52.1,52.4,32.7,61.9C13.2,71.4,-10.1,72.1,-30.9,64C-51.7,55.8,-69.9,38.8,-75.7,18.4C-81.5,-2.1,-74.8,-25.9,-60.1,-40.6C-45.4,-55.3,-22.7,-60.9,2.8,-64.3C28.3,-67.7,56.6,-68.8,63.5,-52.7Z",
    morphPath: "M60.1,-63.3C72.6,-53.4,73.8,-29.4,70.5,-10.2C67.2,9,59.3,23.3,47.9,34C36.6,44.8,21.7,51.9,4.4,56.4C-12.9,60.8,-32.7,62.6,-45.5,54.2C-58.2,45.8,-64.1,27.1,-63.9,10.6C-63.7,-5.8,-57.4,-19.9,-47.9,-33C-38.4,-46.1,-25.7,-58.3,-9.6,-61.8C6.6,-65.4,22.1,-60.4,40.1,-60.8C58.1,-61.2,78.5,-66.9,60.1,-63.3Z"
  },
  {
    key: 'testimonials.p2',
    blobPath: "M55.2,-64.3C68.9,-54.6,75.3,-34.5,76.1,-15C76.9,4.4,72.1,23.1,61.8,37.3C51.5,51.5,35.7,61.1,18.8,65.3C1.9,69.5,-16.1,68.2,-31.2,60.9C-46.3,53.5,-58.6,40.1,-64.8,24.6C-71,9,-71.2,-8.7,-65.2,-24.1C-59.2,-39.5,-47,-52.7,-33,-62.3C-19.1,-71.9,-3.3,-77.9,11.9,-75.4C27,-72.9,41.5,-73.9,55.2,-64.3Z",
    morphPath: "M51.9,-63.1C65,-51.1,70.6,-30.1,69.6,-11.2C68.6,7.6,60.9,24.4,49,36.5C37.1,48.6,21,56.1,3.4,57.1C-14.2,58.1,-33.3,52.6,-45.6,40.8C-57.9,29,-63.4,11,-61.8,-6C-60.1,-23,-51.2,-39,-38.3,-51.3C-25.5,-63.7,-8.7,-72.4,10.1,-73.3C28.8,-74.3,45.6,-67.4,51.9,-63.1Z"
  },
  {
    key: 'testimonials.p3',
    blobPath: "M56.4,-67.2C71.3,-58.4,80.5,-40.2,82.3,-22.1C84.1,-4,78.6,14,69.3,29.3C60,44.6,47,57.2,31.7,64.3C16.4,71.4,-1.2,72.9,-18.2,69.1C-35.3,65.3,-51.8,56.1,-62.7,42.4C-73.6,28.6,-78.9,10.3,-77.4,-7.3C-75.9,-24.8,-67.6,-41.5,-54.7,-51.5C-41.8,-61.4,-24.2,-64.6,-6.5,-68.4C11.3,-72.2,28.8,-76.6,46.4,-74C64,-71.3,71.3,-61.6,56.4,-67.2Z",
    morphPath: "M45.7,-62.1C58.8,-51.4,66,-33.4,66.8,-15.8C67.6,1.8,61.9,19.1,51.4,33.1C40.9,47.1,25.6,57.8,8.2,60.9C-9.3,64,-28.9,59.6,-42.9,49.1C-56.9,38.6,-65.4,22,-66.3,4.9C-67.2,-12.3,-60.5,-30,-48.9,-41.9C-37.4,-53.8,-20.9,-59.9,-4.6,-61.4C11.6,-62.8,26.5,-59.6,45.7,-62.1Z"
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

                  {/* Image Container with Solid Organic Blob Background Identity */}
                  <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="relative w-[280px] h-[280px] md:w-[420px] md:h-[420px] flex items-center justify-center group">

                      {/* REFINED SOLID BLOB BACKGROUND - 'Tray' Platform Effect */}
                      <div className="absolute inset-0 z-0 pointer-events-none scale-[1.2]">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]">
                          <defs>
                            {/* Refined Beige / Rose Gold Highlight */}
                            <linearGradient id="glossyHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.3" />
                              <stop offset="50%" stopColor="#623E27" stopOpacity="0" />
                            </linearGradient>
                          </defs>

                          {/* The Main Solid Blob - Static */}
                          <path
                            fill="#623E27"
                            d={testimonial.blobPath}
                            transform="translate(100 100)"
                          />

                          {/* Refined Rim Highlight - Static */}
                          <path
                            fill="none"
                            stroke="url(#glossyHighlight)"
                            strokeWidth="2"
                            d={testimonial.blobPath}
                            transform="translate(100 100)"
                            className="opacity-60"
                          />
                        </svg>
                      </div>

                      {/* Foreground Subject - Perfectly Preserved, Centered inside the 'Tray' */}
                      <motion.div
                        className="relative z-10 w-[65%] h-[65%] flex items-center justify-center"
                      >
                        <img
                          src={testimonioImg}
                          alt={t(`${testimonial.key}.author`)}
                          className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
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
