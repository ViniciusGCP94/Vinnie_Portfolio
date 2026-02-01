import React from 'react';

const SkillCard = ({ skillName, icon: Icon  }) => {
  
  if (!Icon) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center p-6  bg-gray-900 rounded-lg shadow-lg transition-transform hover:scale-105">
      <Icon size={48} className="text-white" />
      <p className="mt-4 text-white text-lg">{skillName}</p>
    </div>
  );
};

export default SkillCard;