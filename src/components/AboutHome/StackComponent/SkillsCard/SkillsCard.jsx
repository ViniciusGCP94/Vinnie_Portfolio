import React from 'react';
import { techIcons } from '../../../../data/TechSkills'; 

const SkillCard = ({ skillName }) => {
  const IconComponent = techIcons[skillName];

  if (!IconComponent) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#161B22] rounded-lg shadow-lg transition-transform hover:scale-105">
      <IconComponent size={48} className="text-white" />
      <p className="mt-4 text-white text-lg">{skillName}</p>
    </div>
  );
};

export default SkillCard;