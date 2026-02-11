import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  offset?: ['start' | 'center' | 'end', 'start' | 'center' | 'end'];
}

export function useParallax(speed = 0.3) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.6, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return { ref, y, opacity, scale, scrollYProgress };
}
