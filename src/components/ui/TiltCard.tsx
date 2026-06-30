import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 5,
  perspective = 1000,
  scale = 1.01,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 250, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 250, damping: 25 });

  const raf = useRef<number>(0);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      rotateY.set((px - 0.5) * maxTilt);
      rotateX.set((0.5 - py) * maxTilt);
    });
  }

  function onMouseLeave() {
    cancelAnimationFrame(raf.current);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        perspective,
        rotateX: springX,
        rotateY: springY,
      }}
      whileHover={{ scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
