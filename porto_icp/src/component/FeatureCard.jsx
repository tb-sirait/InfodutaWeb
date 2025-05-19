import React from 'react';

function FeatureCard({ imageUrl, altText, title }) {
  return (
    <div
      aria-label={`${title} section`}
      className="bg-blue-900 rounded-lg flex flex-col items-center justify-center p-8 space-y-6"
      role="region"
    >
      <img className="w-24 h-24" height="100" src={imageUrl} alt={altText} width="100" />
      <h2 className="text-white font-bold text-xl">{title}</h2>
    </div>
  );
}

export default FeatureCard;