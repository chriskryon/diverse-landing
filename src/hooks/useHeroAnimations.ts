import { useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export function useHeroAnimations() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile on client side
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Parallax effects based on scroll
  const titleY = useTransform(scrollY, [0, 500], [0, isMobile ? 50 : 100]);
  const buttonOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const buttonScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  // For cards' parallax movement - desktop
  const card1Y = useTransform(scrollY, [0, 500], [0, 200]);
  const card1X = useTransform(scrollY, [0, 500], [0, -150]);
  const card1Rotate = useTransform(scrollY, [0, 500], [-45, -65]);
  
  const card2Y = useTransform(scrollY, [0, 500], [0, 250]);
  const card2X = useTransform(scrollY, [0, 500], [0, 200]);
  const card2Rotate = useTransform(scrollY, [0, 500], [34, 65]);

  // Text animations
  const textAnimations = {
    container: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.8 }
    },
    heading: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    },
    line1: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay: 0.5 }
    },
    line2: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay: 0.8 }
    },
    line3: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.5, delay: 1.1 }
    }
  };

  // Button animations
  const buttonAnimations = {
    whileHover: { 
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(249, 45, 158, 0.5)"
    },
    whileTap: { scale: 0.95 },
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay: 1.4,
      ease: "easeOut"
    },
    gradient: {
      initial: { opacity: 0 },
      whileHover: { opacity: 1 }
    }
  };

  // Card 1 animations - now with mobile options
  const card1Animations = {
    style: { 
      y: card1Y,
      x: card1X,
      rotate: card1Rotate 
    },
    mobileStyle: {
      x: 0,
      y: 0,
      rotate: -35
    },
    initial: { opacity: 0, x: -100, rotate: -60 },
    animate: { 
      opacity: 1, 
      x: 0, 
      rotate: -45,
      transition: {
        opacity: { duration: 1, delay: 0.5 },
        x: { duration: 1, delay: 0.5, type: "spring" },
        rotate: { duration: 1, delay: 0.5 },
      }
    },
    mobileAnimate: {
      opacity: 1,
      x: 0,
      rotate: -35,
      transition: {
        opacity: { duration: 1, delay: 0.5 },
        x: { duration: 1, delay: 0.5, type: "spring" },
        rotate: { duration: 1, delay: 0.5 },
      }
    }
  };

  // Card 2 animations - now with mobile options
  const card2Animations = {
    style: { 
      y: card2Y,
      x: card2X,
      rotate: card2Rotate
    },
    mobileStyle: {
      x: 0,
      y: 0,
      rotate: 35
    },
    initial: { opacity: 0, x: 100, rotate: 20 },
    animate: { 
      opacity: 1, 
      x: 0, 
      rotate: 34,
      transition: {
        opacity: { duration: 1, delay: 0.8 },
        x: { duration: 1, delay: 0.8, type: "spring" },
        rotate: { duration: 1, delay: 0.8 },
      }
    },
    mobileAnimate: {
      opacity: 1,
      x: 0,
      rotate: 35,
      transition: {
        opacity: { duration: 1, delay: 0.8 },
        x: { duration: 1, delay: 0.8, type: "spring" },
        rotate: { duration: 1, delay: 0.8 },
      }
    }
  };

  // Card hover animations
  const cardHoverAnimations = {
    card1: { 
      scale: 1.1,
      rotate: -30,
      transition: { duration: 0.3 }
    },
    card2: { 
      scale: 1.1,
      rotate: 40,
      transition: { duration: 0.3 }
    }
  };

  // Card pulse animations
  const cardPulseAnimations = {
    card1: {
      animate: {
        y: [0, -10, 0],
        filter: [
          "drop-shadow(0px 0px 10px rgba(249,45,158,0.3))",
          "drop-shadow(0px 0px 30px rgba(249,45,158,0.7))",
          "drop-shadow(0px 0px 10px rgba(249,45,158,0.3))"
        ]
      },
      transition: {
        y: {
          duration: 6,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror"
        },
        filter: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }
    },
    card2: {
      animate: {
        y: [0, 10, 0],
        filter: [
          "drop-shadow(0px 0px 10px rgba(249,200,99,0.3))",
          "drop-shadow(0px 0px 30px rgba(249,200,99,0.7))",
          "drop-shadow(0px 0px 10px rgba(249,200,99,0.3))"
        ]
      },
      transition: {
        y: {
          duration: 7,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "mirror"
        },
        filter: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }
      }
    }
  };

  // Border animations
  const borderAnimations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1.5, delay: 0.5 }
  };

  // Mobile-only glow animation
  const mobileGlowAnimations = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.05, 0.15, 0.05]
    },
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  return {
    isMobile,
    titleY,
    buttonOpacity,
    buttonScale,
    card1Animations,
    card2Animations,
    textAnimations,
    buttonAnimations,
    cardHoverAnimations,
    cardPulseAnimations,
    borderAnimations,
    mobileGlowAnimations
  };
}
