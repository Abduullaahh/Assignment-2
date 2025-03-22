const AboutMe = ({ profilePicUrl, skills, interests, description }) => {
  const skillsArray = typeof skills === "string" ? skills.split(",").map((skill) => skill.trim()) : skills
  const interestsArray = typeof interests === "string" ? interests.split(",").map((interest) => interest.trim()) : interests

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image with decorative elements */}
          <div className="w-64 md:w-80 flex-shrink-0 relative overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src={profilePicUrl || "/placeholder.svg"}
                alt="Profile"
                className="w-full h-auto rounded-full transform transition-transform hover:scale-105 duration-500"
              />
          </div>

          {/* Content */}
          <div className="flex-1 mt-8 lg:mt-0">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsArray.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 rounded-lg text-sm font-medium shadow-sm border border-indigo-100 hover:shadow-md transition-shadow dark:from-indigo-900 dark:to-blue-900 dark:text-indigo-200 dark:border-indigo-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interestsArray.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg text-sm font-medium shadow-sm border border-purple-100 hover:shadow-md transition-shadow dark:from-purple-900 dark:to-pink-900 dark:text-purple-200 dark:border-purple-800"
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
  )
}

export default AboutMe