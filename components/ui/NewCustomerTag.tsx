
import React from 'react';

interface NewCustomerTagProps {
  price: string | number;
}

const NewCustomerTag: React.FC<NewCustomerTagProps> = ({ price }) => {
  return (
    <div className="ml-2 flex items-center overflow-hidden rounded-full bg-[#ff1a47] text-white shrink-0">
      <div className="bg-[#ff4d6d] px-1.5 py-0.5 flex items-center">
        <span className="text-[10px] transform scale-90">⚡</span>
        <span className="text-[11px] font-medium whitespace-nowrap">新客价</span>
      </div>
      <div className="px-2 py-0.5 text-[15px] font-bold bg-[#ff1a47] whitespace-nowrap">
        ¥{price}
      </div>
    </div>
  );
};

export default NewCustomerTag;
