import { motion } from 'framer-motion';
import { useScrollReveal, fadeInVariants } from '@/hooks/useScrollReveal';

export default function SectionDivider() {
  const { ref, controls } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={controls}
      className="section-container relative"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent relative">
        {/* Animated glow dot */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(96,165,250,0.5), transparent)',
            boxShadow: '0 0 8px rgba(96,165,250,0.3)',
          }}
          animate={{
            left: ['0%', '50%', '100%', '50%', '0%'],
            opacity: [0.2, 0.8, 0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Secondary ring */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
          style={{ background: 'rgba(167,139,250,0.3)' }}
          animate={{
            scale: [1, 3, 1],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  );
}
