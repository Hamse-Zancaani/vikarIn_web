'use client'

import { MotionProps, HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";

interface SlideEffectProps {
  children: React.ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  duration?: number;
  ease?: [number, number, number, number] | 'easeIn' | 'easeOut' | 'easeInOut' | 'linear';
  isSpring?: boolean
}

export default function SlideEffect(
  { children, direction = 'top', delay = 0.1, duration = 0.7, ease = [1, 0, 0, 1], isSpring = true, className }:
    HTMLMotionProps<'div'> & MotionProps & SlideEffectProps) {

  // Conditionally include the 'type: "spring"' property only if isSpring is true.
  // If isSpring is false, we spread an empty object ({}), effectively omitting the 'type' property,
  // which causes Framer Motion to default to a standard 'tween' transition.
  const transitionProps = {
    duration, 
    ease, 
    delay, 
    ...(isSpring && { type: 'spring' })
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: direction === 'top' ? 70 : direction === 'bottom' ? -70 : 0, 
        x: direction === 'left' ? 70 : direction === 'right' ? -70 : 0 
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      
      // *** FIX APPLIED HERE ***
      transition={transitionProps}
      
      className={className}
    >
      {children}
    </motion.div>
  )
}
