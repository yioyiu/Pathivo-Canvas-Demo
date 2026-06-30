import { useRef, type ReactNode, type ElementType } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  as?: ElementType;
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
  className?: string;
  /** Max magnetic shift in px (default: 12) */
  strength?: number;
  [key: string]: any;
}

export default function MagneticButton({
  as: Tag = 'div',
  href,
  target,
  rel,
  children,
  className = '',
  strength = 12,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 15 });
  const springY = useSpring(y, { stiffness: 300, damping: 15 });

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 150;
    const factor = Math.max(0, 1 - dist / maxDist);
    x.set(dx * factor * (strength / 50));
    y.set(dy * factor * (strength / 50));
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = href ? motion.a : (motion[Tag as keyof typeof motion] as any);

  return (
    <Component
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
