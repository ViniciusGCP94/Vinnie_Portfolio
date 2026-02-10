import React from 'react';

const SkillCard = ({ skillName, icon: Icon  }) => {
  
  if (!Icon) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-emerald-500/10 shadow-lg shadow-black/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20 hover:border-emerald-500/30 group cursor-pointer backdrop-blur-sm">
      <Icon size={48} className="text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(4,255,140,0.3)]" />
      <p className="mt-4 text-gray-300 text-base font-semibold group-hover:text-white transition-colors duration-300">{skillName}</p>
    </div>
  );
};

export default SkillCard;