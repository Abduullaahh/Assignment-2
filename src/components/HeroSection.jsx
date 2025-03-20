import React from 'react';

const HeroSection = ({ name, shortBio }) => {
  return (
    <section id="home" className="py-20 text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{name}</h1>
        <p className="text-xl mb-8">{shortBio}</p>
        <a 
          href="#projects" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;