import { useState, useEffect } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import ProjectCard from "./ProjectCard"

const ProjectsSection = ({ projects: initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects || [])

  useEffect(() => {
      const projectsOrder = localStorage.getItem('projectOrder')
      
      if (projectsOrder) {
        setProjects(JSON.parse(projectsOrder))
      }
  }, [initialProjects])

  // Save project order to localStorage
  const saveProjectOrder = (items) => {
    try {
      setProjects(items)
      localStorage.setItem('projectOrder', JSON.stringify(items))
      console.log('Project order saved to localStorage')
    } catch (error) {
      console.error('Error saving project order:', error)
    }
  }

  // Handle drag end event
  const onDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(projects)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    saveProjectOrder(items)
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

        {projects.length > 0 && (
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