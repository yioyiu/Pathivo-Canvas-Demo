import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealTextProps {
  children: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  className?: string;
  /** Class applied to each animated text span (e.g. for gradient-text) */
  spanClassName?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Stagger delay between lines (seconds) */
  stagger?: number;
}

export default function RevealText({
  children,
  as: Tag = 'h1',
  className = '',
  spanClassName = '',
  delay = 0,
  stagger = 0.06,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const lines = children.split('\n');

  return (
    <div ref={ref}>
      <Tag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: delay + i * stagger,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`block ${spanClassName}`}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
