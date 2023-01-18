import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client, imageurl } from '../ services';
import { SKILLS } from '../types/sanity';
import Skill from './Skill';

const Skills = () => {
  const [skills, setSkills] = useState<SKILLS[]>([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data: SKILLS[]) => {
      setSkills(data);
    });
  }, []);

  return (
    <section className='flex flex-col gap-6'>
      <h2 className='text-xl font-light sm:text-3xl md:text-center'>
        Un buen <span className='text-gradient font-black'> código </span> es la
        base <br /> De una excelente{' '}
        <span className='text-gradient font-black'>aplicación </span>
      </h2>

      <article className='flex flex-wrap items-center justify-center gap-8 rounded-lg p-12 shadow-2xl shadow-primary'>
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </article>
    </section>
  );
};

export default Skills;
