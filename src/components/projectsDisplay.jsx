import ProjectSection from './projectSection'
import ProjectSelectContext from '../contexts/ProjectSelect'

function ProjectsDisplay(props){
    const selectedProject = props.selectedProject


    if(selectedProject===null){
        return (
            <div class='project-display'>
                
            </div>
        )
    }
    

    

    return (
        <div class='project-display'>
        <h2>{selectedProject.title}</h2>
        </div>
    )
}

export default ProjectsDisplay