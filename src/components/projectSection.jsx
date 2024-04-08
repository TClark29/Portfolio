import { useContext } from "react"
import ProjectSelect from "../contexts/ProjectSelect"



function ProjectSection(props){

    const title = props.title
    const projects = props.projects
   

    const {selectedProject, setSelectedProject} = useContext(ProjectSelect)



    function projectSelectButton(project){
        setSelectedProject(project)

    }
    return (<div className="edit project-list">
        <div className="select-image-container">
            <h3>{title}</h3>

        </div>
        {projects.map((project, index)=>{
            console.log(project)
            return (<div className={'project-select-single'}key={index} onClick={()=>projectSelectButton(project)}>
                <div className="select-image-container">
                    <img className='select-image' src={project.img_url}></img>
                </div>
              

            </div>)
        })}

        
    </div>
    
   )
}

export default ProjectSection