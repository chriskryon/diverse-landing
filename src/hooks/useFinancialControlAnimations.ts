import { useElementInView } from "./useElementInView";

export function useFinancialControlAnimations() {
  const titleAnimation = useElementInView(0.1);
  const imageAnimation = useElementInView(0.1);
  const textBoxAnimation = useElementInView(0.1);

  // Container animation variants
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
  
  // Title animations
  const titleAnimations = {
    ref: titleAnimation.ref,
    controls: titleAnimation.controls,
    container: containerVariants,
    title: {
      hidden: { x: -50, opacity: 0 },
      visible: { 
        x: 0, 
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" }
      }
    }
  };

  // Image animations
  const imageAnimations = {
    ref: imageAnimation.ref,
    controls: imageAnimation.controls,
    container: {
      hidden: { x: 50, opacity: 0, scale: 0.9 },
      visible: { 
        x: 0, 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 0.8, 
          ease: "easeOut" 
        }
      }
    },
    hover: { 
      scale: 1.02,
      boxShadow: "0 12px 40px rgba(249,200,99,0.3)",
      transition: { duration: 0.3 } 
    }
  };

  // Text box animations
  const textBoxAnimations = {
    ref: textBoxAnimation.ref,
    controls: textBoxAnimation.controls,
    variants: {
      hidden: { y: 30, opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
          duration: 0.6, 
          delay: 0.4,
          ease: "easeOut" 
        }
      }
    },
    hover: { 
      y: -8, 
      boxShadow: "0 16px 40px rgba(249,45,158,0.25)",
      backgroundColor: "#0f172a",
      transition: { duration: 0.3 }
    }
  };

  return {
    titleAnimations,
    imageAnimations,
    textBoxAnimations
  };
}
