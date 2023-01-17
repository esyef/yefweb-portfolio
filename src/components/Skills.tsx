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
    <section className='relative flex w-full flex-col flex-wrap gap-6 py-44 md:items-center md:justify-center'>
      <h2 className='heading2'>
        Un buen código es la base <br /> De una excelente aplicación
      </h2>

      <article className='flex flex-wrap justify-center gap-8'>
        {skills.map((skill) => (
          <figure
            key={skill.name}
            className='bg-accent-gradient flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full'
          >
            <Image
              src={imageurl(skill.icon).toString()}
              alt={skill.name}
              width={59}
              height={59}
            />
            <figcaption className='font-poppins text-white'>
              {skill.name}
            </figcaption>
          </figure>
        ))}
      </article>
    </section>
  );
};

export default Skills;
