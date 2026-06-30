import { type ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  from?: string;
  to?: string;
}

export default function GradientText({
  children,
  className = '',
  as: Tag = 'span',
  from = 'from-blue-400',
  to = 'to-purple-400',
}: GradientTextProps) {
  return (
    <Tag className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${className}`}>
      {children}
    </Tag>
  );
}
