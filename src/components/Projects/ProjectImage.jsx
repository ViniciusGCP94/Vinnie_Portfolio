import { formatRepoTitle, getProjectImageUrl, PLACEHOLDER_IMAGE } from "../../utils/formatters";

const ProjectImage = ({ projectName }) => {
    return (
        <div className='w-full md:w-1/2 relative h-[300px] lg:h-[350px] overflow-hidden group border border-gray-700 rounded-2xl p-2'>
            <img 
                src={getProjectImageUrl(projectName)}
                onError={(e) => { e.target.src = PLACEHOLDER_IMAGE }}
                alt={`Capa do projeto ${projectName}`}
                className="w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-120 object-cover"
            />

            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/50 transition-colors duration-500"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <h2 className="text-gray-200 text-2xl lg:text-3xl font-bold uppercase tracking-widest text-center drop-shadow-lg transform transition-transform duration-500 group-hover:scale-105 group-hover:text-gray-100">
                    {formatRepoTitle(projectName)}
                </h2>
            </div>
        </div>
    );
};

export default ProjectImage;