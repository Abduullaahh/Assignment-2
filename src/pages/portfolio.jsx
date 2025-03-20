import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';

const Portfolio = ({ data }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => setDarkMode(!darkMode);
  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No portfolio data found</h1>
          <p className="mb-6">Please fill out the data entry form first.</p>
          <a href="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Go to Data Entry
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSection name={data.name} shortBio={data.shortBio} />
        <AboutMe 
          profilePicUrl={data.aboutMe.profilePicUrl}
          skills={data.aboutMe.skills}
          interests={data.aboutMe.interests}
          description={data.aboutMe.description}
        />
        <ProjectsSection projects={data.projects} />
        <ContactSection />
        <Footer socialMedia={data.socialMedia} />
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
};

export default Portfolio;