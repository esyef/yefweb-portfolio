import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client, imageurl } from '../ services';
import { SKILLS } from '../types/sanity';

const Skills = () => {
  const [skills, setSkills] = useState<SKILLS[]>([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data: SKILLS[]) => {
      setSkills(data);
    });
  }, []);

  return (
    <section className='mt-36'>
      <h2 className='mb-6 text-center text-xl font-semibold text-white md:text-4xl'>
        Un buen código es la base <br /> De una excelente aplicación
      </h2>

      <article className='flex flex-wrap justify-center gap-4 md:mx-auto md:w-3/4 lg:w-full'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='inline-flex h-[200px] w-[200px] flex-col items-center  justify-center gap-3 rounded-full p-2 shadow-sm shadow-gray-900'
          >
            <Image
              src={imageurl(skill.icon).toString()}
              alt={skill.name}
              width={100}
              height={100}
              className='rounded-full object-contain'
            />
            <span className='text-lg text-white'>{skill.name}</span>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Skills;
