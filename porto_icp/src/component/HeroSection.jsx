
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS

// Tell Font Awesome to skip adding CSS automatically since it's being imported above
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function HeroSection() {
  return (
    <section className="relative w-full max-w-full h-[360px] sm:h-[400px] md:h-[480px] lg:h-[520px] xl:h-[560px]">
      <img
        alt="Modern office building with glass facade and decorative patterned wall on left side, green leaves on right side, blue sky with clouds"
        className="w-full h-full object-cover"
        height="560"
        src="https://storage.googleapis.com/a1aa/image/bc5b7df6-b211-4ef9-1e4d-75518e679884.jpg"
        width="1200"
      />
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-end pr-6 md:pr-20 lg:pr-32 xl:pr-40">
        <div className="max-w-md text-white text-right space-y-4">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed">
            Solusi kebutuhan Software
            <br />
            dan Hardware Pilihan Anda
          </p>
          <button
            aria-label="Eksplor button"
            className="bg-blue-900 border border-blue-900 rounded-md px-4 py-2 font-semibold text-white hover:bg-blue-800 flex items-center space-x-2"
          >
            <span>Eksplor</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
