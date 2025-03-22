import { useState } from "react"
import { PlusCircle, Trash2, ChevronDown, ChevronUp, Image, Github, Link2 } from "lucide-react"

const DataEntryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    shortBio: "",
    aboutMe: {
      profilePicUrl: "",
      skills: "",
      interests: "",
      description: "",
    },
    projects: [
      {
        title: "",
        description: "",
        imageUrl: "",
        githubLink: "",
      },
      {
        title: "",
        description: "",
        imageUrl: "",
        githubLink: "",
      },
      {
        title: "",
        description: "",
        imageUrl: "",
        githubLink: "",
      },
    ],
    socialMedia: [{ name: "", url: "" }],
  })

  const [expandedSections, setExpandedSections] = useState({
    basicInfo: true,
    aboutMe: true,
    projects: true,
    socialMedia: true,
  })

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

  const handleChange = (e, section, index, field) => {
    if (section) {
      if (index !== undefined) {
        const updatedArray = [...formData[section]]
        if (field) {
          updatedArray[index][field] = e.target.value
        } else {
          updatedArray[index] = e.target.value
        }
        setFormData({ ...formData, [section]: updatedArray })
      } else {
        setFormData({
          ...formData,
          [section]: { ...formData[section], [field]: e.target.value },
        })
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value })
    }
  }

  const addSocialMedia = () => {
    setFormData({
      ...formData,
      socialMedia: [...formData.socialMedia, { name: "", url: "" }],
    })
  }

  const removeSocialMedia = (index) => {
    const updatedSocialMedia = [...formData.socialMedia]
    updatedSocialMedia.splice(index, 1)
    setFormData({
      ...formData,
      socialMedia: updatedSocialMedia,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:px-10">
            <h1 className="text-3xl font-extrabold text-white">Portfolio Data Entry</h1>
            <p className="mt-2 text-indigo-100">Fill in the details below to generate your professional portfolio</p>
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200">
          <div
            className="px-6 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50"
            onClick={() => toggleSection("basicInfo")}
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800">Basic Information</h2>
              <p className="text-sm text-gray-500">Your name and a brief introduction</p>
            </div>
            <div className="text-gray-400">
              {expandedSections.basicInfo ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {expandedSections.basicInfo && (
            <div className="p-6 space-y-5 bg-white">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="shortBio" className="block text-sm font-medium text-gray-700 mb-1">
                  Professional Title & Short Bio
                </label>
                <textarea
                  id="shortBio"
                  name="shortBio"
                  value={formData.shortBio}
                  onChange={(e) => handleChange(e)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Frontend Developer with 5 years of experience specializing in React and modern JavaScript frameworks."
                  required
                />
              </div>
            </div>
          )}
        </div>

        {/* About Me */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200">
          <div
            className="px-6 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50"
            onClick={() => toggleSection("aboutMe")}
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800">About Me</h2>
              <p className="text-sm text-gray-500">Tell visitors more about yourself</p>
            </div>
            <div className="text-gray-400">
              {expandedSections.aboutMe ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {expandedSections.aboutMe && (
            <div className="p-6 space-y-5 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">
                    Profile Picture URL
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <Image size={18} />
                    </div>
                    <input
                      id="profilePic"
                      type="url"
                      value={formData.aboutMe.profilePicUrl}
                      onChange={(e) => handleChange(e, "aboutMe", undefined, "profilePicUrl")}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="https://example.com/profile.jpg"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                    Skills
                  </label>
                  <input
                    id="skills"
                    type="text"
                    value={formData.aboutMe.skills}
                    onChange={(e) => handleChange(e, "aboutMe", undefined, "skills")}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="React, JavaScript, CSS, HTML, Node.js"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate skills with commas</p>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="interests" className="block text-sm font-medium text-gray-700">
                  Interests
                </label>
                <input
                  id="interests"
                  type="text"
                  value={formData.aboutMe.interests}
                  onChange={(e) => handleChange(e, "aboutMe", undefined, "interests")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Web Development, UI/UX Design, Open Source"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">Separate interests with commas</p>
              </div>

              <div className="space-y-1">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Detailed Description
                </label>
                <textarea
                  id="description"
                  value={formData.aboutMe.description}
                  onChange={(e) => handleChange(e, "aboutMe", undefined, "description")}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Share your professional journey, achievements, and what drives you..."
                  required
                />
              </div>
            </div>
          )}
        </div>

        {/* Projects */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200">
          <div
            className="px-6 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50"
            onClick={() => toggleSection("projects")}
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800">Projects</h2>
              <p className="text-sm text-gray-500">Showcase your best work</p>
            </div>
            <div className="text-gray-400">
              {expandedSections.projects ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {expandedSections.projects && (
            <div className="p-6 space-y-6 bg-white">
              {formData.projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-5 space-y-5 bg-gray-50 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Project {index + 1}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label htmlFor={`project-title-${index}`} className="block text-sm font-medium text-gray-700">
                        Project Title
                      </label>
                      <input
                        id={`project-title-${index}`}
                        type="text"
                        value={project.title}
                        onChange={(e) => handleChange(e, "projects", index, "title")}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="E-commerce Website"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor={`project-github-${index}`} className="block text-sm font-medium text-gray-700">
                        GitHub Link
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                          <Github size={18} />
                        </div>
                        <input
                          id={`project-github-${index}`}
                          type="url"
                          value={project.githubLink}
                          onChange={(e) => handleChange(e, "projects", index, "githubLink")}
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          placeholder="https://github.com/username/project"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor={`project-image-${index}`} className="block text-sm font-medium text-gray-700">
                      Project Image URL
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Image size={18} />
                      </div>
                      <input
                        id={`project-image-${index}`}
                        type="url"
                        value={project.imageUrl}
                        onChange={(e) => handleChange(e, "projects", index, "imageUrl")}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="https://example.com/project-image.jpg"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor={`project-desc-${index}`} className="block text-sm font-medium text-gray-700">
                      Project Description
                    </label>
                    <textarea
                      id={`project-desc-${index}`}
                      value={project.description}
                      onChange={(e) => handleChange(e, "projects", index, "description")}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Describe the project, technologies used, and your role..."
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Social Media */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200">
          <div
            className="px-6 py-4 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:bg-gray-50"
            onClick={() => toggleSection("socialMedia")}
          >
            <div>
              <h2 className="text-xl font-bold text-gray-800">Social Media</h2>
              <p className="text-sm text-gray-500">Connect with visitors on other platforms</p>
            </div>
            <div className="text-gray-400">
              {expandedSections.socialMedia ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </div>

          {expandedSections.socialMedia && (
            <div className="p-6 space-y-5 bg-white">
              {formData.socialMedia.map((social, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-end gap-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 space-y-1">
                    <label htmlFor={`social-name-${index}`} className="block text-sm font-medium text-gray-700">
                      Platform Name
                    </label>
                    <input
                      id={`social-name-${index}`}
                      type="text"
                      value={social.name}
                      onChange={(e) => handleChange(e, "socialMedia", index, "name")}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="LinkedIn, Twitter, GitHub..."
                      required
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <label htmlFor={`social-url-${index}`} className="block text-sm font-medium text-gray-700">
                      Profile URL
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Link2 size={18} />
                      </div>
                      <input
                        id={`social-url-${index}`}
                        type="url"
                        value={social.url}
                        onChange={(e) => handleChange(e, "socialMedia", index, "url")}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="https://linkedin.com/in/username"
                        required
                      />
                    </div>
                  </div>

                  {formData.socialMedia.length > 1 && (
                    <button
                      type="button"
                      className="px-3 py-3 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center"
                      onClick={() => removeSocialMedia(index)}
                      aria-label="Remove social media profile"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                className="w-full mt-3 px-4 py-3 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors flex items-center justify-center"
                onClick={addSocialMedia}
              >
                <PlusCircle size={18} className="mr-2" />
                Add Social Media Profile
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-300 focus:outline-none transition-all shadow-md hover:shadow-lg"
            >
              Generate Portfolio
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DataEntryForm