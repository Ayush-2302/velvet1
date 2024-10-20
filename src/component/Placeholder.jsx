import React from 'react';

const Placeholder = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6 bg-gray-100 rounded-lg shadow-lg animate-pulse">
      {/* Header Placeholder */}
      <div className="w-32 h-8 bg-gray-300 rounded-full"></div>
      
      {/* Text Placeholders */}
      <div className="flex flex-col space-y-2">
        <div className="w-64 h-4 bg-gray-300 rounded"></div>
        <div className="w-56 h-4 bg-gray-300 rounded"></div>
        <div className="w-48 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Image Placeholder */}
      <div className="w-full max-w-xs h-40 bg-gray-300 rounded-md"></div>

      {/* Tags Placeholder */}
      <div className="flex space-x-2">
        <div className="w-20 h-6 bg-gray-300 rounded-full"></div>
        <div className="w-24 h-6 bg-gray-300 rounded-full"></div>
      </div>

      {/* Description Placeholder */}
      <div className="w-full max-w-xs h-20 bg-gray-300 rounded-md"></div>

      {/* Button Placeholder */}
      <div className="w-32 h-10 bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default Placeholder;
