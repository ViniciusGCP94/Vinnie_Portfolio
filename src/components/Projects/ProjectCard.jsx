import { useProjects } from "../../hooks/useProjects";
import LoadingSpinner from "../common/LoadingSpinner";
import ProjectImage from "./ProjectImage";
import ProjectTechStack from "./ProjectTechStack";
import ProjectLinks from "./ProjectLinks";

const ProjectCard = () => {
    const { projects, loading } = useProjects();

    if (loading) {
        return <LoadingSpinner message="Carregando projetos do GitHub..." />;
    }

    return (
        <>
            {projects.map((projeto) => (
                <div key={projeto.id} className="border-1 border-danger w-full flex flex-col md:flex-row px-4 bg-gray text-gray-300 p-10 lg:p-20 text-center justify-center mb-10 gap-10"> 
                    
                    <ProjectImage projectName={projeto.name} />

                    <div className='w-full md:w-1/2 border border-gray-700 px-8 py-6 flex flex-col justify-between text-left'>
                        <div>
                            <p className="text-lg leading-relaxed mb-6">
                                {projeto.description || "Este projeto ainda não possui uma descrição no GitHub."}
                            </p>
                            
                            <ProjectTechStack topics={projeto.topics} />
                        </div>
                        
                        <ProjectLinks 
                            githubUrl={projeto.html_url}
                            websiteUrl={projeto.homepage}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectCard;