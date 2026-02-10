import ProjectImage from "./ProjectImage";
import ProjectTechStack from "./ProjectTechStack";
import ProjectLinks from "./ProjectLinks";

const ProjectItem = ({ project }) => {
    return (
        <div className="w-full flex flex-col md:flex-row px-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm text-gray-300 p-10 lg:p-16 text-center justify-center mb-20 gap-12 rounded-3xl border border-emerald-500/10 shadow-2xl shadow-black/50 hover:shadow-emerald-500/10 transition-all duration-500">
            
            <ProjectImage projectName={project.name} />

            <div className="w-full md:w-1/2 border border-emerald-500/10 px-10 py-8 flex flex-col justify-between text-left rounded-2xl bg-black/20 backdrop-blur-sm">
                <div>
                    <p className="text-xl leading-relaxed mb-8 text-gray-300 font-normal">
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