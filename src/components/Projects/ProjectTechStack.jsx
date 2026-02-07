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
        <div className='flex flex-wrap justify-start gap-6 mb-8'>
            {topics.map(tag => {
                const skill = getSkillData(tag);
                
                if (!skill) return null;

                return (
                    <div key={tag} className="flex flex-col items-center gap-2 group">
                        <skill.icon 
                            size={30} 
                            className="group-hover:text-danger transition-colors" 
                        />
                        <p className="text-[10px] uppercase font-bold tracking-tighter">
                            {skill.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProjectTechStack;