export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const container = {
  hidden: { y: -100, scale: 0.5 },
  visible: {
    y: 0,
    delay: 0.1,
    scale: 1,
    duration: 0.5,
    transition: {
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
