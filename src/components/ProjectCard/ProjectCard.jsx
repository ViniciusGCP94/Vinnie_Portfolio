// ↓ TROCAR ESSES IMPORTS
import { useProjects } from "../../hooks/useProjects";
import { formatRepoTitle, getProjectImageUrl, PLACEHOLDER_IMAGE } from "../../utils/formatters";
import { TechSkills } from "../../data/TechSkills";

const ProjectCard = () => {
    const { projects, loading } = useProjects();
    
    const getSkillData = (tagName) => {
        return TechSkills.find(
            (s) => s.name.toLowerCase() === tagName.toLowerCase()
        );
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <p className="text-white animate-pulse text-xl">Carregando projetos do GitHub...</p>
            </div>
        );
    }

    return (
        <>
            {projects.map((projeto) => (
                <div key={projeto.id} className="border-1 border-danger w-full flex flex-col md:flex-row px-4 bg-gray text-gray-300 p-10 lg:p-20 text-center justify-center mb-10 gap-10">

                    <div className='w-full md:w-1/2 relative h-[300px] lg:h-[350px] overflow-hidden group border border-gray-700 rounded-2xl p-2'>
                    
                        <img 
                          src={getProjectImageUrl(projeto.name)}
                          onError={(e) => { e.target.src = PLACEHOLDER_IMAGE }}
                          alt={`Capa do projeto ${projeto.name}`}
                          className="w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-120 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/80 group-hover:bg-black/50 transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-4">
                             <h2 className="text-gray-200 text-2xl lg:text-3xl font-bold uppercase tracking-widest text-center drop-shadow-lg transform transition-transform duration-500 group-hover:scale-105 group-hover:text-gray-100">
                                {formatRepoTitle(projeto.name)}
                             </h2>
                        </div>
                    </div>
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
                        <div className='flex gap-5 mt-auto'>
                            <a 
                                href={projeto.html_url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="bg-white text-black px-6 py-2 rounded font-bold hover:bg-danger hover:text-white transition-all duration-300"
                            >
                                GITHUB
                            </a>
                            {projeto.homepage && (
                                <a 
                                    href={projeto.homepage} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="border border-white px-6 py-2 rounded font-bold hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    WEB
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProjectCard;