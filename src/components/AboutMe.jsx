import React from 'react';

const AboutMe = ({ profilePicUrl, skills, interests, description }) => {
  // Convert comma-separated strings to arrays
  const skillsArray = typeof skills === 'string' ? skills.split(',').map(skill => skill.trim()) : skills;
  const interestsArray = typeof interests === 'string' ? interests.split(',').map(interest => interest.trim()) : interests;
  
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-64 flex-shrink-0">
            <img 
              src={profilePicUrl} 
              alt="Profile" 
              className="w-full h-auto rounded-full shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-6">{description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skillsArray.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900 dark:text-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interestsArray.map((interest, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm dark:bg-green-900 dark:text-green-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;