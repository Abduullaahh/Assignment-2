import React from 'react';

const ProjectCard = ({ title, description, imageUrl, githubLink }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col transform hover:scale-105 transition-transform duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      </div>
      <div className="px-6 pb-4">
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center py-2 px-4 bg-gray-800 dark:bg-gray-700 text-white rounded hover:bg-gray-700 dark:hover:bg-gray-600 transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;