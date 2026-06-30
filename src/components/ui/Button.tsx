import { type ButtonHTMLAttributes, type ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  magnetic?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  magnetic = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 300, damping: 15 });
  const springY = useSpring(my, { stiffness: 300, damping: 15 });

  function onMouseMove(e: React.MouseEvent) {
    if (!magnetic) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const factor = Math.max(0, 1 - dist / 150);
    mx.set(dx * factor * 0.25);
    my.set(dy * factor * 0.25);
  }

  function onMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 select-none';

  const sizes: Record<string, string> = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  };

  const variants: Record<string, string> = {
    primary:
      'bg-gradient-to-r from-pathivo-500 to-purple-500 text-white shadow-lg shadow-pathivo-500/25 hover:shadow-pathivo-500/40 hover:scale-[1.02] active:scale-[0.98]',
    secondary:
      'glass-hover text-white border border-white/10 hover:border-white/20 hover:bg-white/10',
    ghost:
      'text-white/70 hover:text-white hover:bg-white/5',
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const Tag = href ? motion.a : motion.button;
  const extraProps = href
    ? {
        href,
        target: href.startsWith('http') ? ('_blank' as const) : undefined,
        rel: href.startsWith('http') ? ('noopener noreferrer' as const) : undefined,
      }
    : {};

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ display: 'inline-flex' }}
    >
      <Tag
        className={classes}
        style={{ x: springX, y: springY }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...extraProps}
        {...(props as any)}
      >
        {children}
      </Tag>
    </div>
  );
}
