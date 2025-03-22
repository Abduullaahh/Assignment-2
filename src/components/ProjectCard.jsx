import { EyeIcon } from "lucide-react"
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, description, imageUrl, githubLink, isDragging }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full flex flex-col transform transition-all duration-300 ${
        isDragging ? "rotate-3 scale-105 shadow-2xl" : "hover:shadow-xl hover:-translate-y-2"
      }`}
    >
      {/* Drag handle indicator */}
      <div className="bg-indigo-600 dark:bg-indigo-500 h-1.5 w-full"></div>

      {/* Image container */}
      <div className="relative h-48 overflow-hidden group">
        <img
          src={imageUrl || "/placeholder.svg?height=300&width=400"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-bold">{title}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{description}</p>
      </div>

      {/* Actions */}
      <div className="px-6 pb-6 pt-2 flex gap-3">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          <FaGithub/>
          GitHub
        </a>
        <a
          href="#"
          className="flex-1 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white text-sm font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          <EyeIcon/>
          Preview
        </a>
      </div>
    </div>
  )
}

export default ProjectCard