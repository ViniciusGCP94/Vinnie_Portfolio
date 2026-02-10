import { TechSkills } from "../../data/TechSkills";

const ProjectTechStack = ({ topics }) => {
    const getSkillData = (tagName) => {
        return TechSkills.find(
            (skill) => skill.name.toLowerCase() === tagName.toLowerCase()
        );
    };

    if (!topics || topics.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-wrap justify-start gap-6 mb-10">
            {topics.map(tag => {
                const skill = getSkillData(tag);
                
                if (!skill) return null;

                return (
                    <div key={tag} className="flex flex-col items-center gap-3 group/tech cursor-pointer">
                        <skill.icon 
                            size={30} 
                            className="text-emerald-500 group-hover/tech:text-emerald-400 transition-all duration-300 drop-shadow-[0_0_8px_rgba(4,255,140,0.4)] group-hover/tech:drop-shadow-[0_0_16px_rgba(4,255,140,0.6)] group-hover/tech:scale-110" 
                        />
                        <p className="text-xs uppercase font-bold tracking-tight text-gray-400 group-hover/tech:text-emerald-400 transition-colors duration-300">
                            {skill.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectTechStack;