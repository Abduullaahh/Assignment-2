import { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import ProjectCard from "./ProjectCard"

const ProjectsSection = ({ projects: initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects || [])
  const [loading, setLoading] = useState(!initialProjects)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Only fetch if no initial projects were provided
    if (!initialProjects || initialProjects.length === 0) {
      const fetchProjects = async () => {
        try {
          setLoading(true)
          // Add your API call here to fetch projects
          // const response = await fetch('/api/projects');
          // const data = await response.json();
          // setProjects(data);
          setLoading(false)
        } catch (err) {
          setError("Failed to fetch projects")
          setLoading(false)
        }
      }

      fetchProjects()
    }
  }, [initialProjects])

  // Handle drag end event
  const onDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(projects)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setProjects(items)

    // You can add here a function to persist the new order
    // Example: saveProjectOrder(items);
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-t from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Drag the cards to reorder and explore my latest work
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 dark:border-indigo-400"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-10 px-4 bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg max-w-md mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-16 px-4 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-md mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto mb-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <p className="text-gray-600 dark:text-gray-300">No projects found</p>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="projects" direction="horizontal" type="PROJECTS">
              {(provided) => (
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {projects.map((project, index) => (
                    <Draggable
                      key={project.id || `project-${index}`}
                      draggableId={project.id || `project-${index}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`${snapshot.isDragging ? "z-10" : ""} transition-all duration-300`}
                        >
                          <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            githubLink={project.githubLink}
                            isDragging={snapshot.isDragging}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection