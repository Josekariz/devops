import React from 'react';
import LilianImage from './assets/lilian.jpg';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="content-container">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Text content */}
          <div className="md:w-1/2 text-container p-4 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Lilian Kariuki☺</h1>
            <p className="text-lg md:text-2xl font-normal">
              I AM A: <span className="text-accent">Sysops / Devops engineer / Cloud Architect / Database manager</span>
            </p>
          </div>

          {/* Image on the right for tablets and desktops */}
          <div className="md:w-1/2 image-container">
            <div className="image-wrapper md:w-500 md:h-500">
              <img src={LilianImage} alt="Lilian" className="custom-image-size animated-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
