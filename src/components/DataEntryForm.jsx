import React, { useState } from 'react';

const DataEntryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    shortBio: '',
    aboutMe: {
      profilePicUrl: '',
      skills: '',
      interests: '',
      description: ''
    },
    projects: [
      {
        title: '',
        description: '',
        imageUrl: '',
        githubLink: ''
      },
      {
        title: '',
        description: '',
        imageUrl: '',
        githubLink: ''
      },
      {
        title: '',
        description: '',
        imageUrl: '',
        githubLink: ''
      }
    ],
    socialMedia: [
      { name: '', url: '' }
    ]
  });

  const handleChange = (e, section, index, field) => {
    if (section) {
      if (index !== undefined) {
        // Handle arrays like projects or social media
        const updatedArray = [...formData[section]];
        if (field) {
          updatedArray[index][field] = e.target.value;
        } else {
          updatedArray[index] = e.target.value;
        }
        setFormData({ ...formData, [section]: updatedArray });
      } else {
        // Handle nested objects like aboutMe
        setFormData({
          ...formData,
          [section]: { ...formData[section], [field]: e.target.value }
        });
      }
    } else {
      // Handle top-level fields
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addSocialMedia = () => {
    setFormData({
      ...formData,
      socialMedia: [...formData.socialMedia, { name: '', url: '' }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Portfolio Data Entry</h2>
      
      {/* Basic Info */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Basic Information</h3>
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Short Bio</label>
          <textarea
            name="shortBio"
            value={formData.shortBio}
            onChange={(e) => handleChange(e)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>
      
      {/* About Me */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">About Me</h3>
        <div className="mb-4">
          <label className="block mb-1">Profile Picture URL</label>
          <input
            type="url"
            value={formData.aboutMe.profilePicUrl}
            onChange={(e) => handleChange(e, 'aboutMe', undefined, 'profilePicUrl')}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Skills (comma separated)</label>
          <input
            type="text"
            value={formData.aboutMe.skills}
            onChange={(e) => handleChange(e, 'aboutMe', undefined, 'skills')}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Interests (comma separated)</label>
          <input
            type="text"
            value={formData.aboutMe.interests}
            onChange={(e) => handleChange(e, 'aboutMe', undefined, 'interests')}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Detailed Description</label>
          <textarea
            value={formData.aboutMe.description}
            onChange={(e) => handleChange(e, 'aboutMe', undefined, 'description')}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>
      </div>
      
      {/* Projects */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Projects</h3>
        {formData.projects.map((project, index) => (
          <div key={index} className="mb-6 p-4 border rounded">
            <h4 className="font-medium mb-2">Project {index + 1}</h4>
            <div className="mb-2">
              <label className="block mb-1">Title</label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => handleChange(e, 'projects', index, 'title')}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Description</label>
              <textarea
                value={project.description}
                onChange={(e) => handleChange(e, 'projects', index, 'description')}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">Image URL</label>
              <input
                type="url"
                value={project.imageUrl}
                onChange={(e) => handleChange(e, 'projects', index, 'imageUrl')}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block mb-1">GitHub Link</label>
              <input
                type="url"
                value={project.githubLink}
                onChange={(e) => handleChange(e, 'projects', index, 'githubLink')}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Social Media */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Social Media</h3>
        {formData.socialMedia.map((social, index) => (
          <div key={index} className="mb-4 flex space-x-2">
            <div className="flex-1">
              <label className="block mb-1">Platform Name</label>
              <input
                type="text"
                value={social.name}
                onChange={(e) => handleChange(e, 'socialMedia', index, 'name')}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1">URL</label>
              <input
                type="url"
                value={social.url}
                onChange={(e) => handleChange(e, 'socialMedia', index, 'url')}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addSocialMedia}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Social Media
        </button>
      </div>
      
      <button
        type="submit"
        className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Generate Portfolio
      </button>
    </form>
  );
};

export default DataEntryForm;