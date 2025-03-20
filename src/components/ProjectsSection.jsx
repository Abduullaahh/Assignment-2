import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ projects: initialProjects }) => {
  const [projects, setProjects] = useState(initialProjects || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  // Handle drag end event
  const onDragEnd = (result) => {
    if (!result.destination) return;
    
    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setProjects(items);
  };

  if (loading) return <div className="text-center py-10">Loading projects...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
          Drag the cards to reorder my projects
        </p>
        
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="projects">
            {(provided) => (
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {projects.map((project, index) => (
                  <Draggable key={index} draggableId={`project-${index}`} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
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