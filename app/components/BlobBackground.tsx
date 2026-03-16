import React from 'react';

const BlobBackground: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 overflow-hidden -z-10"
      style={{
        backgroundImage: 'url(\"/university-of-richmond.jpg\")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    />
  );
};

export default BlobBackground;
