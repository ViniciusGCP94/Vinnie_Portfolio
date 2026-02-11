const ProjectLinks = ({ githubUrl, websiteUrl, showButtons = false }) => {
    return (
        <div className="flex gap-6 mt-auto">
            <a 
                href={githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className={`border-2 border-emerald-500 text-emerald-500 px-8 py-3 rounded-xl font-bold hover:bg-emerald-500 hover:text-black transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1 ${
                    showButtons 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                }`}
                style={{
                    transitionDelay: showButtons ? '200ms' : '0ms'
                }}
            >
                GITHUB
            </a>
            
            {websiteUrl && (
                <a 
                    href={websiteUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className={`border-2 border-emerald-500 text-emerald-500 px-8 py-3 rounded-xl font-bold hover:bg-emerald-500 hover:text-black transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1 ${
                        showButtons 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                    }`}
                    style={{
                        transitionDelay: showButtons ? '350ms' : '0ms'
                    }}
                >
                    WEB
                </a>
            )}
        </div>
    );
};
export default ProjectLinks;
