// Componente dos botões (GitHub e Web)
const ProjectLinks = ({ githubUrl, websiteUrl }) => {
    return (
        <div className='flex gap-5 mt-auto'>
            <a 
                href={githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white text-black px-6 py-2 rounded font-bold hover:bg-danger hover:text-white transition-all duration-300"
            >
                GITHUB
            </a>
            
            {websiteUrl && (
                <a 
                    href={websiteUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="border border-white px-6 py-2 rounded font-bold hover:bg-white hover:text-black transition-all duration-300"
                >
                    WEB
                </a>
            )}
        </div>
    );
};

export default ProjectLinks;