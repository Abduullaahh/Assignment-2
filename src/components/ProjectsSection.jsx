import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ projects: initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects || []);
  const [loading, setLoading] = useState(!initialProjects);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Only fetch if no initial projects were provided
    if (!initialProjects || initialProjects.length === 0) {
      const fetchProjects = async () => {
        try {
          setLoading(true);
          // Add your API call here to fetch projects
          // const response = await fetch('/api/projects');
          // const data = await response.json();
          // setProjects(data);
          setLoading(false);
        } catch (err) {
          setError('Failed to fetch projects');
          setLoading(false);
        }
      };
      
      fetchProjects();
    }
  }, [initialProjects]);

  // Handle drag end event
  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setProjects(items);
    
    // You can add here a function to persist the new order
    // Example: saveProjectOrder(items);
  };

  if (loading) return <div className="text-center py-10">Loading projects...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!projects.length) return <div className="text-center py-10">No projects found</div>;

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
          Drag the cards to reorder my projects
        </p>
        
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="projects" direction="horizontal" type="PROJECTS">
            {(provided) => (
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                        className={snapshot.isDragging ? "z-10" : ""}
                      >
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imageUrl={project.imageUrl}
                          githubLink={project.githubLink}
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
      </div>
    </section>
  );
};

export default ProjectsSection;