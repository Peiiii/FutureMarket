
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white px-4 py-5 ${className}`}>
      {children}
    </div>
  );
};

export default Section;
