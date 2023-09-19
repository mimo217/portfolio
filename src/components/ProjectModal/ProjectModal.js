import React, { useState } from 'react'
import './ProjectModal.scss'

function ProjectModal({ projectsData }) {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <div>
      <button onClick={toggleModal}>Show Projects</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={toggleModal}>
              Close
            </button>
            <h2>Projects</h2>
            <ul>
              {projectsData.map((project) => (
                <li key={project.id}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectModal
