import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: string;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = true,
  gradient,
  glow = false,
}: GlassCardProps) {
  const Comp = hover ? motion.div : 'div';
  const motionProps = hover
    ? {
        whileHover: { y: -4, transition: { duration: 0.3 } },
      }
    : {};

  return (
    <Comp
      className={`relative glass rounded-2xl p-6 lg:p-8 ${
        hover ? 'glass-hover cursor-default' : ''
      } ${className}`}
      {...motionProps}
    >
      {glow && (
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
          style={{
            background: gradient
              ? `linear-gradient(135deg, ${gradient}, transparent)`
              : 'linear-gradient(135deg, rgba(59,130,246,0.2), transparent)',
          }}
        />
      )}
      {children}
    </Comp>
  );
}
