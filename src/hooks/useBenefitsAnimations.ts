import { useState } from "react";
import { useElementInView } from "./useElementInView";

export function useBenefitsAnimations() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  // Animation refs and controls - Use threshold 0.1 for earlier triggering
  const titleAnimation = useElementInView(0.1);
  const mobileAnimation = useElementInView(0.1);
  const desktopAnimation = useElementInView(0.1);
  const featuresAnimation = useElementInView(0.1);

  // Common animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Title animations
  const titleAnimations = {
    ref: titleAnimation.ref,
    controls: titleAnimation.controls,
    variants: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.7 } 
      }
    }
  };

  // Mobile animations
  const mobileAnimations = {
    ref: mobileAnimation.ref,
    controls: mobileAnimation.controls,
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          staggerChildren: 0.15,
          delayChildren: 0.3
        }
      }
    },
    item: {
      hidden: { 
        opacity: 0,
        scale: 0.95
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    },
    card: (index: number) => ({
      hidden: { 
        opacity: 0,
        y: 30,
        scale: 0.95
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    })
  };

  // Desktop animations
  const desktopAnimations = {
    ref: desktopAnimation.ref,
    controls: desktopAnimation.controls,
    container: containerVariants,
    image: {
      hidden: { x: 0, opacity: 0, scale: 0.9 },
      visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { 
          duration: 0.8, 
          delay: 0.2,
          ease: "easeOut"
        }
      }
    },
    leftCard: (index: number) => ({
      hidden: { x: -40, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay: 0.8 + (0.15 * index),
          ease: "easeOut"
        }
      }
    }),
    rightCard: (index: number) => ({
      hidden: { x: 40, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay: 0.8 + (0.15 * index),
          ease: "easeOut"
        }
      }
    }),
    floatingAnimation: (index: number, isHovered: boolean) => ({
      y: isHovered ? -5 : [0, -10, 0],
      scale: isHovered ? 1.03 : 1,
      transition: {
        duration: 4 + index * 0.5,
        ease: "easeInOut",
        repeat: isHovered ? 0 : Number.POSITIVE_INFINITY,
        repeatType: isHovered ? undefined : "mirror" as const
      }
    }),
    hoverEffect: {
      boxShadow: "0 12px 40px rgba(249,45,158,0.2)",
      borderColor: "rgba(249,45,158,1)"
    }
  };

  // Features animations
  const featuresAnimations = {
    ref: featuresAnimation.ref,
    controls: featuresAnimation.controls,
    container: containerVariants,
    item: itemVariants,
    featureItem: (i: number) => ({
      initial: { opacity: 0, y: 20 },
      animate: { 
        opacity: hoveredFeature !== null && hoveredFeature !== i ? 0.3 : 1, 
        y: 0 
      },
      transition: { delay: i * 0.1, duration: 0.5 }
    }),
    featureHover: { 
      borderColor: "rgba(249,45,158,1)"
    },
    featureTransition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    },
    logoItem: (index: number) => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1, duration: 0.5 }
    })
  };

  return {
    hoveredCard,
    setHoveredCard,
    hoveredFeature,
    setHoveredFeature,
    titleAnimations,
    mobileAnimations,
    desktopAnimations,
    featuresAnimations
  };
}
