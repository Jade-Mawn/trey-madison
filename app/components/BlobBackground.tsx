import React from 'react';

const BlobBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <img
        src="/university-of-richmond.jpg"
        alt="Blob Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BlobBackground;
