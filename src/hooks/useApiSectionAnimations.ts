import { useElementInView } from "./useElementInView";

export function useApiSectionAnimations() {
  // Animation refs and controls
  const titleAnimation = useElementInView(0.1);
  const benefitsAnimation = useElementInView(0.1);
  const codeBlockAnimation = useElementInView(0.1);
  const ctaAnimation = useElementInView(0.1);

  // Title animations
  const titleAnimations = {
    ref: titleAnimation.ref,
    controls: titleAnimation.controls,
    initial: { opacity: 0, y: 30 },
    variants: {
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" } 
      }
    }
  };

  // Benefits animations
  const benefitsAnimations = {
    ref: benefitsAnimation.ref,
    controls: benefitsAnimation.controls,
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 25, scale: 0.95 },
      visible: {
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 12px 40px rgba(249,45,158,0.15)",
      transition: { duration: 0.3 }
    }
  };

  // Code block animations
  const codeBlockAnimations = {
    ref: codeBlockAnimation.ref,
    controls: codeBlockAnimation.controls,
    initial: { opacity: 0, y: 30, scale: 0.95 },
    variants: {
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" } 
      }
    }
  };

  // CTA animations
  const ctaAnimations = {
    ref: ctaAnimation.ref,
    controls: ctaAnimation.controls,
    initial: { opacity: 0, y: 30 },
    variants: {
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } 
      }
    }
  };

  return {
    titleAnimations,
    benefitsAnimations,
    codeBlockAnimations,
    ctaAnimations
  };
}
