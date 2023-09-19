import React, { useEffect, useState } from 'react'
import ProjectModal from '../../components/ProjectModal/ProjectModal'

function Projects() {
  const [projectsData, setProjectsData] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/projects')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setProjectsData(data)
      } catch (error) {
        console.error('Error fetching project data:', error)
      }
    }

    fetchData()
  }, [])

  const openProjectModal = (project) => {
    setSelectedProject(project);
  }

  const closeProjectModal = () => {
    setSelectedProject(null);
  }

  return (
    <div>
      <h1></h1>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => openProjectModal(project)}>View Details</button>
          </li>
        ))}
      </ul>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={closeProjectModal}
        />
      )}
    </div>
  );
}

export default Projects;
