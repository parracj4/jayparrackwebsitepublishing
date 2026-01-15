import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article';
}

/**
 * Section - Consistent section wrapper with proper spacing
 * Use for all major page sections
 */
export function Section({
  children,
  className = '',
  id,
  as: Component = 'section',
}: SectionProps) {
  return (
    <Component id={id} className={`section ${className}`}>
      <div className="container-content">
        {children}
      </div>
    </Component>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

/**
 * SectionHeader - Consistent header for sections with optional label
 */
export function SectionHeader({
  label,
  title,
  description,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  const alignment = centered ? 'text-center mx-auto' : '';

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignment} ${className}`}>
      {label && (
        <span className="inline-block text-sm font-medium tracking-wider uppercase text-[var(--color-accent)] mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
