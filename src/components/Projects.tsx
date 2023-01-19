import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client, imageurl } from '../ services';
import { darkPattern, patternavir } from '../assets';
import { PROJECTS } from '../types/sanity';
import Button from './Button';
import FilterProjects from './FilterProjects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState<PROJECTS[]>([]);
  const [projectsFilter, setProjectsFilter] = useState<PROJECTS[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const query = '*[_type =="projects"]';
    client.fetch(query).then((data: PROJECTS[]) => {
      setProjects(data);
      setProjectsFilter(data);
    });
  }, []);

  return (
    <section className='pt-[90px]' id='proyectos'>
      <div className='mb-16 flex flex-col gap-6'>
        <h3 className='text-3xl md:text-center md:text-6xl md:font-semibold'>
          Mis proyectos
        </h3>
        <p className='text-lg md:mx-auto md:max-w-3xl md:text-center'>
          🔍 Descubre mis proyectos más recientes. 💻 Proyectos de{' '}
          <span className='text-gradient font-bold'>desarrollo web.</span> 🎨
          Diseños atractivos y modernos enfocados en la{' '}
          <span className='text-gradient font-bold'>
            experiencia del usuario{' '}
          </span>
          🚀.
        </p>
      </div>

      {/* filter projects */}
      <FilterProjects
        filter={filter}
        setFilter={setFilter}
        setProjectsFilter={setProjectsFilter}
        projects={projects}
      />

      <article className='items-center justify-center md:flex md:flex-wrap'>
        {projectsFilter.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </article>
    </section>
  );
};

export default Projects;
