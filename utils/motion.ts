import { Variants } from "framer-motion";



type Direction = "left" | "right" | "up" | "down" | "";
type TransitionType = "spring" | "tween";



export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};




export const fadeIn = (
  direction: Direction = "up",
  type: TransitionType = "tween", // افتراضي آمن
  delay: number = 0,
  duration: number = 0.75
): Variants => {
  // لو direction فارغ → اجعله "up"
  const dir = direction || "up";

  // لو type فارغ → اجعله "tween"
  const animType = type || "tween";

  return {
    hidden: {
      x: dir === "left" ? 100 : dir === "right" ? -100 : 0,
      y: dir === "up" ? 100 : dir === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: animType,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: Direction,
  type: TransitionType,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x:
        direction === "left"
          ? "-100%"
          : direction === "right"
          ? "100%"
          : 0,
      y:
        direction === "up"
          ? "100%"
          : direction === "down"
          ? "100%"
          : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};
