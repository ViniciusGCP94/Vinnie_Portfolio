import { formatRepoTitle, getProjectImageUrl, PLACEHOLDER_IMAGE } from "../../utils/formatters";

const ProjectImage = ({ projectName }) => {
    return (
        <div className="w-full md:w-1/2 relative h-[320px] lg:h-[400px] overflow-hidden group border-2 border-emerald-500/20 rounded-3xl p-0 shadow-2xl shadow-black/50 hover:shadow-emerald-500/20 transition-all duration-500">
            <img 
                src={getProjectImageUrl(projectName)}
                onError={(e) => { e.target.src = PLACEHOLDER_IMAGE }}
                alt={`Capa do projeto ${projectName}`}
                className="w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-120 object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/30 transition-all duration-500"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <h2 className="text-white text-2xl lg:text-4xl font-black font-display uppercase tracking-wider text-center drop-shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-200">
                    {formatRepoTitle(projectName)}
                </h2>
            </div>
        </div>
    );
};

export default ProjectImage;