
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'danger' | 'success' | 'secondary' | 'brand' | 'outline';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'secondary', className = '' }) => {
  const baseStyles = "text-[11px] px-1.5 py-0.5 rounded-sm inline-flex items-center justify-center whitespace-nowrap";
  
  const variants = {
    danger: "bg-[#ff1a47] text-white",
    success: "bg-[#f2fbf7] text-[#00b26a]",
    secondary: "bg-[#f5f7fa] text-[#606266]",
    brand: "bg-[#00705a] text-white",
    outline: "border border-[#ffccc7] text-[#ff4d4f]"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
