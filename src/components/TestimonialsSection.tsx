import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    key: 'testimonials.p1',
    rating: 5,
  },
  {
    key: 'testimonials.p2',
    rating: 5,
  },
  {
    key: 'testimonials.p3',
    rating: 5,
  },
];

const ReviewsBar = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-20 pt-12 border-t border-border/50 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Main Rating */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-2xl font-bold text-foreground mb-2">
            {t('testimonials.reviews.title')}
          </span>
          <div className="flex gap-0.5 text-primary">
            <Star size={16} className="fill-current" />
            <Star size={16} className="fill-current" />
            <Star size={16} className="fill-current" />
            <Star size={16} className="fill-current" />
            <div className="relative overflow-hidden w-[8px]">
              <Star size={16} className="fill-current" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-16 bg-border/60 mx-4" />

        {/* Platforms */}
        <div className="flex flex-wrap justify-center gap-12 flex-1">
          {/* TripAdvisor */}
          <a
            href="https://www.tripadvisor.com.pe/Restaurant_Review-g294315-d7216625-Reviews-Chef_Paz_Restaurant-Iquitos_Loreto_Region.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-[#34E0A1] flex items-center justify-center p-2.5">
              <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
                <path d="M14.5,10.1C13.1,10.1,12,11.2,12,12.6s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S15.9,10.1,14.5,10.1z M14.5,14.1 c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S15.3,14.1,14.5,14.1z M9.5,10.1C8.1,10.1,7,11.2,7,12.6s1.1,2.5,2.5,2.5 s2.5-1.1,2.5-2.5S10.9,10.1,9.5,10.1z M9.5,14.1c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S10.3,14.1,9.5,14.1z M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8 s8,3.6,8,8C20,16.4,16.4,20,12,20z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm text-foreground/80 leading-none mb-1">Tripadvisor</span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5 text-amber-500">
                  <Star size={10} className="fill-current" />
                  <Star size={10} className="fill-current" />
                  <Star size={10} className="fill-current" />
                  <Star size={10} className="fill-current" />
                  <Star size={10} />
                </div>
                <span className="text-[10px] font-bold text-muted-foreground">4.0 / 5</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-muted-foreground">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="text-[10px] font-bold text-muted-foreground">900+</span>
              </div>
            </div>
          </a>

          {/* Google */}
          <a
            href="https://maps.app.goo.gl/4Zao52WsgnqWM9y39"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group hover:scale-105 transition-transform"
          >
            <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center p-2.5 shadow-sm">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.67-.35-1.38-.35-2.09s.13-1.42.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-sm text-foreground/80 leading-none mb-1">Google</span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5 text-amber-500">
                  <Star size={10} className="fill-current" />
                  <Star size={10} className="fill-current" />
                  <Star size={10} className="fill-current" />
                  <Star size={10} className="fill-current" />
                  <div className="relative overflow-hidden w-[3px]">
                    <Star size={10} className="fill-current" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground">4.3 / 5</span>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-muted-foreground">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="text-[10px] font-bold text-muted-foreground">1800+</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-12 left-12 text-primary/5 pointer-events-none">
        <Quote size={180} />
      </div>
      <div className="absolute bottom-12 right-12 text-primary/5 rotate-180 pointer-events-none">
        <Quote size={120} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="font-sans-body text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
        </AnimatedSection>

        {/* 3-Column Grid for Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="h-full flex flex-col bg-background/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group">
                {/* Fixed Stars */}
                <div className="flex gap-1 mb-6 text-accent">
                  {Array.from({ length: testimonial.rating }).map((_, starIdx) => (
                    <Star key={starIdx} size={18} className="fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="flex-1 font-serif text-lg lg:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                  "{t(`${testimonial.key}.text`)}"
                </blockquote>

                {/* Author Info */}
                <div className="pt-6 border-t border-border/30">
                  <div className="w-8 h-1 bg-primary/20 mb-3 group-hover:w-12 group-hover:bg-primary/40 transition-all duration-300" />
                  <p className="font-sans-body font-bold text-foreground text-lg tracking-tight">
                    {t(`${testimonial.key}.author`)}
                  </p>
                  <div className="mt-2 flex gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary/30" />
                    <span className="w-1 h-1 rounded-full bg-primary/30" />
                    <span className="w-1 h-1 rounded-full bg-primary/30" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Reviews Bar Section */}
        <div className="mt-20">
          <ReviewsBar />
        </div>
      </div>
    </section>
  );
};


export default TestimonialsSection;
