import React from 'react';
import SkillCard from './SkillCard';
import { mySkills } from '../data/techSkills'; 

const SkillsContainer = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl text-center font-bold text-white mb-8">Minhas Habilidades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
        {mySkills.map((skill) => (
          <SkillCard key={skill} skillName={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsContainer;