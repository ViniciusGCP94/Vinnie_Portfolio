import React from 'react';
import TechCard from '../../SkillsCard/SkillsCard.jsx';
import { TechSkills } from '../../../data/TechSkills.jsx'; 

const SkillsContainer = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl text-center font-bold text-white mb-8">Minhas Habilidades</h2>
      <div className=" h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {TechSkills.map(({ID, name , icon}) => (
          <TechCard key={ID} skillName={name} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default SkillsContainer;