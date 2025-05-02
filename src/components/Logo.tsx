
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative h-10 w-10 overflow-hidden">
        <div className="absolute inset-0 bg-lwrgold rounded-full transform -rotate-45"></div>
        <div className="absolute inset-1 bg-lwrnavy rounded-full flex items-center justify-center">
          <span className="text-lwrgold font-bold text-lg">L</span>
        </div>
      </div>
      <div className="ml-2 font-bold text-white">
        <span>Local</span>
        <span className="text-lwrgold mx-1">Web</span>
        <span>Refresh</span>
      </div>
    </div>
  );
};

export default Logo;
