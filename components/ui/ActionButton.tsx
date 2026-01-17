
import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = "flex-1 font-bold py-3 px-2 rounded-full text-[14px] whitespace-nowrap transition-transform active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#ff4d6d] to-[#ff1a47] text-white shadow-sm",
    secondary: "bg-[#fff0f3] text-[#ff4d6d]"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
