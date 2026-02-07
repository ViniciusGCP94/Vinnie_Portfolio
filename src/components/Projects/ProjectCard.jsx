import { useProjects } from "../../hooks/useProjects";
import { TechSkills } from "../../data/TechSkills";
import LoadingSpinner from "../common/LoadingSpinner";
// ↓ ADICIONAR
import ProjectImage from "./ProjectImage";
// ↓ REMOVER (não precisa mais dessas)
// import { formatRepoTitle, getProjectImageUrl, PLACEHOLDER_IMAGE } from "../../utils/formatters";

const ProjectCard = () => {
    const { projects, loading } = useProjects();

    const getSkillData = (tagName) => {
        return TechSkills.find(
            (s) => s.name.toLowerCase() === tagName.toLowerCase()
        );
    };

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
                            <div className='flex flex-wrap justify-start gap-6 mb-8'>
                                {projeto.topics && projeto.topics.map(tag => {
                                    const skill = getSkillData(tag);
                                    if (!skill) return null;
                                    return (
                                        <div key={tag} className="flex flex-col items-center gap-2 group">
                                            {skill ? (
                                                <skill.icon size={30} className="group-hover:text-danger transition-colors" />
                                            ) : (
                                                <div className="w-[30px] h-[30px] bg-gray-600 rounded-full" />
                                            )}
                                            <p className="text-[10px] uppercase font-bold tracking-tighter">
                                                {skill ? skill.name : tag}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectCard;