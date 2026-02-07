import ProjectImage from "./ProjectImage";
import ProjectTechStack from "./ProjectTechStack";
import ProjectLinks from "./ProjectLinks";

const ProjectItem = ({ project }) => {
    return (
        <div className="border-1 border-danger w-full flex flex-col md:flex-row px-4 bg-gray text-gray-300 p-10 lg:p-20 text-center justify-center mb-10 gap-10">
            
            <ProjectImage projectName={project.name} />

            <div className='w-full md:w-1/2 border border-gray-700 px-8 py-6 flex flex-col justify-between text-left'>
                <div>
                    <p className="text-lg leading-relaxed mb-6">
                        {project.description || "Este projeto ainda não possui uma descrição no GitHub."}
                    </p>
                    
                    <ProjectTechStack topics={project.topics} />
                </div>

                <ProjectLinks 
                    githubUrl={project.html_url}
                    websiteUrl={project.homepage}
                />
            </div>
        </div>
    );
};

export default ProjectItem;