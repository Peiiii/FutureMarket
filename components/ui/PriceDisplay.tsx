
import React from 'react';

interface PriceDisplayProps {
  price: number;
  className?: string;
  color?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price, className = '', color = "text-[#ff1a47]" }) => {
  const [integer, decimal] = price.toFixed(1).split('.');
  
  return (
    <div className={`flex items-baseline gap-0.5 font-bold ${color} ${className}`}>
      <span className="text-lg">¥</span>
      <span className="text-3xl font-sans">{integer}</span>
      <span className="text-lg -ml-0.5">.{decimal}</span>
    </div>
  );
};

export default PriceDisplay;
