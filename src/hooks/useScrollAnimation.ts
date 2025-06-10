import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

export const useScrollAnimation = (delay: number = 0) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: "easeOut"
        }
      });
    }
  }, [isInView, controls, delay]);

  return {
    ref,
    initial: { opacity: 0, y: 30 },
    animate: controls
  };
};

export const useStaggeredAnimation = (itemCount: number, staggerDelay: number = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return {
    ref,
    isInView,
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.2
        }
      }
    },
    itemVariants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    }
  };
};
