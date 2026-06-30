import { useEffect, useRef } from 'react';
import { useMotionValue, MotionValue } from 'framer-motion';

interface MousePosition {
  nx: MotionValue<number>;
  ny: MotionValue<number>;
}

export function useMousePosition(): MousePosition {
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        nx.set((e.clientX / window.innerWidth) * 2 - 1);
        ny.set((e.clientY / window.innerHeight) * 2 - 1);
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, [nx, ny]);

  return { nx, ny };
}
