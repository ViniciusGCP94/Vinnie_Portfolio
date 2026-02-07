import { useProjects } from "../../hooks/useProjects";
import LoadingSpinner from "../common/LoadingSpinner";
import ProjectItem from "./ProjectItem";

const ProjectCard = () => {
    const { projects, loading } = useProjects();

    if (loading) {
        return <LoadingSpinner message="Carregando projetos do GitHub..." />;
    }

    if (projects.length === 0) {
        return (
            <div className="text-center text-gray-400 p-10">
                <p>Nenhum projeto encontrado.</p>
            </div>
        );
    }

    return (
        <>
            {projects.map((project) => (
                <ProjectItem 
                    key={project.id} 
                    project={project}
                />
            ))}
        </>
    );
};

export default ProjectCard;