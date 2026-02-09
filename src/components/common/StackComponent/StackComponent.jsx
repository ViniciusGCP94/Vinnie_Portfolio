import React from 'react';
import TechCard from '../../SkillsCard/SkillsCard.jsx';
import { TechSkills } from '../../../data/TechSkills.jsx'; 

const SkillsContainer = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl lg:text-5xl text-center font-black font-display text-white mb-16">Minhas Habilidades</h2>
      <div className="h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 max-w-6xl mx-auto">
        {TechSkills.map(({ID, name , icon}) => (
          <TechCard 
            key={ID} 
            skillName={name} 
            icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default SkillsContainer;