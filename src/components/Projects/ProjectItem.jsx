import { useState, useEffect } from "react";
import { useTypingAnimation } from "../../hooks/useTypingAnimation";
import ProjectImage from "./ProjectImage";
import ProjectTechStack from "./ProjectTechStack";
import ProjectLinks from "./ProjectLinks";

const ProjectItem = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const description = project.description || "Este projeto ainda não possui uma descrição no GitHub.";
    const { displayText, isComplete } = useTypingAnimation(description, isHovered);

      useEffect(() => {
        setIsTouchDevice('ontouchstart' in window);
    }, []);

    const handleInteraction = () => {
        if (isTouchDevice) {
            setIsHovered(prev => !prev); 
        } else {
            setIsHovered(true); 
        }
    };

    const handleLeave = () => {
        if (!isTouchDevice) {
            setIsHovered(false);
        }
    };
  
    return (
        <div 
            className="w-full flex flex-col md:flex-row px-4 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm text-gray-300 p-10 lg:p-16 text-center justify-center mb-20 gap-12 rounded-3xl border border-emerald-500/10 shadow-2xl shadow-black/50 hover:shadow-emerald-500/10 transition-all duration-500"
            onMouseEnter={handleInteraction}
            onMouseLeave={handleLeave}
            onClick={isTouchDevice ? handleInteraction : undefined}
        >
            <ProjectImage projectName={project.name} />

            <div className="w-full md:w-1/2 border border-emerald-500/10 px-5 py-8 flex flex-col justify-around items-center lg:items-start text-left rounded-2xl bg-black/20 backdrop-blur-sm">
                <div>
                    <p className="text-xl text-center lg:text-start leading-relaxed mb-8 text-gray-300 font-normal min-h-[100px]">
                        {displayText}
                        {isHovered && !isComplete && (
                            <span className="inline-block w-0.5 h-6 ml-1 bg-emerald-500 animate-pulse"></span>
                        )}
                    </p>
                    
                    <ProjectTechStack 
                        topics={project.topics} 
                        showIcons={isComplete}
                    />
                </div>

                <ProjectLinks 
                    githubUrl={project.html_url}
                    websiteUrl={project.homepage}
                    showButtons={isComplete}
                />
            </div>
        </div>
    );
};

export default ProjectItem;