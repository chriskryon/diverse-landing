import { useState } from "react";
import { useElementInView } from "./useElementInView";

export function useBenefitsAnimations() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Animation refs and controls
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
    initial: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7 } 
    }
  };

  // Mobile animations
  const mobileAnimations = {
    ref: mobileAnimation.ref,
    controls: mobileAnimation.controls,
    container: containerVariants,
    item: itemVariants,
    card: (index: number) => ({
      hidden: { x: index % 2 === 0 ? -30 : 30, y: 20, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay: 0.1 * index,
          ease: "easeOut"
        }
      }
    })
  };

  // Desktop animations
  const desktopAnimations = {
    ref: desktopAnimation.ref,
    controls: desktopAnimation.controls,
    container: containerVariants,
    image: itemVariants,
    leftCard: (index: number) => ({
      hidden: { x: -40, opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay: 0.15 * index,
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
          delay: 0.15 * index,
          ease: "easeOut"
        }
      }
    }),
    // Fixed function with correct type for repeatType
    floatingAnimation: (index: number, isHovered: boolean) => ({
      y: isHovered ? 0 : [0, -10, 0],
      scale: isHovered ? 1.03 : 1,
      transition: {
        duration: 4 + index * 0.5,
        ease: "easeInOut",
        repeat: isHovered ? 0 : Number.POSITIVE_INFINITY,
        repeatType: isHovered ? undefined : "mirror" as const
      }
    }),
    hoverEffect: {
      boxShadow: "0 8px 32px rgba(249,45,158,0.15)",
    }
  };

  // Features animations
  const featuresAnimations = {
    ref: featuresAnimation.ref,
    controls: featuresAnimation.controls,
    container: containerVariants,
    item: itemVariants,
    featureHover: { 
      scale: 1.07, 
      y: -8, 
      boxShadow: "0 8px 32px rgba(249,45,158,0.15)" 
    },
    featureTransition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  };

  return {
    hoveredCard,
    setHoveredCard,
    titleAnimations,
    mobileAnimations,
    desktopAnimations,
    featuresAnimations,
    hoverGradientBorder: "hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 hover:p-[2px]"
  };
}
