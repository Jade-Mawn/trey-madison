import React from 'react';

const BlobBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <img
        src="/Blobs.jpeg"
        alt="Blob Background"
        className="w-full h-full object-cover filter blur-3xl"
      />
    </div>
  );
};

export default BlobBackground;
