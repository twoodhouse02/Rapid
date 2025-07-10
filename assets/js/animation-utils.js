// animation-utils.js - Shared animation utilities
import { stagger } from "motion";

/**
 * Get global animation type from WordPress localized data
 * @returns {string} Animation type
 */
function getGlobalAnimationType() {
  // Check for WordPress localized data

  if (typeof window !== "undefined" && window.ThemeAnimationConfig) {
    return window.ThemeAnimationConfig.animation_type || "fade-up";
  }

  // Fallback to default
  return "fade-up";
}

export const animationType = getGlobalAnimationType();

/**
 * Animation configuration generator
 * @returns {object} Animation configuration object
 */
function getAnimationConfig(animationType) {
  const baseConfig = {
    duration: 0.25,
    delay: stagger(0.1),
    type: "tween",
    stiffness: 100,
  };

  const animations = {
    "fade-only": {
      keyframes: { opacity: [0, 1], y: [0, 0] },
      options: {
        ...baseConfig,
        duration: 0.5,
      },
    },
    "move-in": {
      keyframes: { opacity: [0, 1], y: [50, 0] },
      options: baseConfig,
    },
    bounce: {
      keyframes: { opacity: [0, 1], y: [50, 0] },
      options: {
        ...baseConfig,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return animations[animationType] || animations["fade-up"];
}

export const animationConfig = getAnimationConfig(animationType);
