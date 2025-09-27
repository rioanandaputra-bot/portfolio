import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  isExternal?: boolean;
}

const buttonVariants = {
  primary: 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-orange-500 hover:to-pink-500',
  secondary: 'bg-[#0300146e] border border-[#7042f861] text-gray-200 hover:bg-[#0300148a] hover:border-[#7042f8aa]',
  outline: 'border-2 border-purple-500/50 text-purple-300 hover:border-purple-400 hover:text-white hover:bg-purple-500/10',
  ghost: 'text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-[#7042f8]/40 hover:to-[#b49bff]/30'
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  isExternal = false,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 cursor-pointer inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#030014]';

  const buttonClass = cn(
    baseClasses,
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  const ButtonComponent = motion.button;
  const LinkComponent = motion.a;

  const motionProps = {
    whileHover: { scale: 1.05, y: -2 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  if (href) {
    return (
      <LinkComponent
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={buttonClass}
        {...motionProps}
      >
        {children}
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        )}
      </LinkComponent>
    );
  }

  return (
    <ButtonComponent
      className={buttonClass}
      {...motionProps}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {children}
    </ButtonComponent>
  );
};