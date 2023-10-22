import React, { useEffect, useState } from 'react'
import ProjectModal from '../../components/ProjectModal/ProjectModal'
import '../../components/ProjectModal/ProjectModal.scss'

function Projects() {
  const [projectsData, setProjectsData] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    setSelectedProject(project)
    isModalOpen(true)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    isModalOpen(false)
  }

  return (
    <div>
      <ul>
        {projectsData.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => openProjectModal(project)}>View Details</button>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <ProjectModal
          selectedProject={selectedProject}
          isModalOpen
          onClose={closeProjectModal}
        />
      )}

    {/* Debugging information */}
    {selectedProject && (
        <div>
          <pre>{JSON.stringify(selectedProject, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}



export default Projects;
