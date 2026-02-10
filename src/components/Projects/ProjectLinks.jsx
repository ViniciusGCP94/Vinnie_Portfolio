// Componente dos botões (GitHub e Web)
const ProjectLinks = ({ githubUrl, websiteUrl }) => {
    return (
        <div className='flex gap-6 mt-auto'>
            <a 
                href={githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="border-2 border-emerald-500 text-emerald-500 px-8 py-3 rounded-xl font-bold hover:bg-emerald-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1"
            >
                GITHUB
            </a>
            
            {websiteUrl && (
                <a 
                    href={websiteUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="border-2 border-emerald-500 text-emerald-500 px-8 py-3 rounded-xl font-bold hover:bg-emerald-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1"
                >
                    WEB
                </a>
            )}
        </div>
    );
};

export default ProjectLinks;