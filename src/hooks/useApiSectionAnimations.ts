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
        transition: { duration: 0.7 } 
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
          staggerChildren: 0.2,
          delayChildren: 0.3
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
      }
    }
  };

  // Code block animations
  const codeBlockAnimations = {
    ref: codeBlockAnimation.ref,
    controls: codeBlockAnimation.controls,
    initial: { opacity: 0, y: 30 },
    variants: {
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.7 } 
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
        transition: { duration: 0.7 } 
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
