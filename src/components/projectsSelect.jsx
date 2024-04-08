import ProjectSection from "./projectSection";

function ProjectsSelect({ projects }) {


  return (
    <div class='project-select'>
      <h2>Projects</h2>
      {projects.projects.map((projectGroup, index) => {
       
        return <ProjectSection key ={index}title={projectGroup.title} projects={projectGroup.projects}></ProjectSection>;
      })}
    </div>
  );
}

export default ProjectsSelect;
