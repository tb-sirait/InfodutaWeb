import React from 'react';
import FeatureCard from './FeatureCard';

function MainContent() {
  const features = [
    {
      title: 'Produk',
      imageUrl: 'https://storage.googleapis.com/a1aa/image/b37bccd1-c441-43b7-9e5d-c414642a37fa.jpg',
      altText: 'White line icon of a desktop computer with tower and monitor on blue background',
    },
    {
      title: 'Layanan',
      imageUrl: 'https://storage.googleapis.com/a1aa/image/1f4b53d4-5189-43a1-efe4-91de4a13156b.jpg',
      altText: 'White line icon of two interlocking gears on blue background',
    },
    {
      title: 'Tentang',
      imageUrl: 'https://storage.googleapis.com/a1aa/image/2bdfc4b7-8b3c-4b52-84a3-9273452faaeb.jpg',
      altText: 'White line icon of a speech bubble with letter i inside on blue background',
    },
  ];

  return (
    <main className="py-10 px-6 max-w-7xl mx-auto">
      <h1 className="text-center font-extrabold text-2xl md:text-3xl mb-1">
        Eksplor Infoduta
      </h1>
      <p className="text-center font-semibold text-sm md:text-base mb-10">
        Lebih dekat dengan perusahaan kami:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;