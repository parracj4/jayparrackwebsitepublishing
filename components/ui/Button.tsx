import { type ReactNode, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
}

/**
 * Button - Reusable button component with accent glow styling
 * Renders as <a> if href is provided, otherwise <button>
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-semibold
    transition-all duration-250
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)]
  `;

  const variants = {
    primary: `
      bg-[var(--color-accent)] text-white
      hover:bg-[var(--color-accent-secondary)]
      glow-accent-subtle hover:glow-accent
    `,
    secondary: `
      glass-accent text-white
      hover:bg-[rgba(255,77,0,0.1)]
    `,
    ghost: `
      bg-transparent text-[var(--color-text-secondary)]
      hover:text-[var(--color-text-primary)]
      hover:bg-[var(--color-glass-bg)]
    `,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
