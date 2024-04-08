import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import ProjectsSelect from './components/projectsSelect'
import ProjectsDisplay from './components/projectsDisplay'
import projectInfo from './data/projectsInfo.json'
import ProjectSelect from './contexts/ProjectSelect'


function App() {

  const [projects, setProjects] = useState(projectInfo)
  const [selectedProject, setSelectedProject] = useState(null)


  

  return (
    <>
    <ProjectSelect.Provider value={{selectedProject:selectedProject, setSelectedProject:setSelectedProject}}>
      <div className='main'>
      <Header></Header>
      <div className='projects'>
      <ProjectsSelect projects={projects}></ProjectsSelect>
      <ProjectsDisplay selectedProject={selectedProject}></ProjectsDisplay>
      </div>
      </div>
    </ProjectSelect.Provider>  
    </>
  )
}

export default App
