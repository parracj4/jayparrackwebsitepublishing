import { type ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  hover?: boolean;
  as?: 'div' | 'article' | 'section';
}

/**
 * GlassCard - iOS 26 Liquid Glass inspired card component
 * Provides frosted glass effect with optional accent border glow
 */
export function GlassCard({
  children,
  className = '',
  accent = false,
  hover = true,
  as: Component = 'div',
}: GlassCardProps) {
  const baseStyles = accent ? 'glass-accent' : 'glass';
  const hoverStyles = hover && !accent ? 'transition-colors duration-250' : '';

  return (
    <Component className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </Component>
  );
}
