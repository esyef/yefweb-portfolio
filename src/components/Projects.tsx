import { useEffect, useState } from 'react';
import { client } from '../ services';
import { PROJECTS } from '../types/sanity';
import FilterProjects from './FilterProjects';
import ProjectCard from './ProjectCard';

const Message = () => (
  <div className='flex flex-col items-center justify-center  p-4'>
    <p>Ups! Estamos trabajando en nuevos proyectos.⏰ </p>
    <p>Pronto publicaremos nuevos proyectos, por favor regresa pronto.</p>
  </div>
);

const Projects = () => {
  const [projects, setProjects] = useState<PROJECTS[]>([]);
  const [projectsFilter, setProjectsFilter] = useState<PROJECTS[]>([]);
  const [filter, setFilter] = useState('All');
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const query = '*[_type =="projects"]';
    client.fetch(query).then((data: PROJECTS[]) => {
      setProjects(data);
      setProjectsFilter(data);
    });
  }, []);

  useEffect(() => {
    if (projectsFilter.length <= 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [projectsFilter]);

  return (
    <section className='pt-[90px]' id='proyectos'>
      <div className='mb-6 flex flex-col gap-6'>
        <h3 className='text-3xl md:text-center md:text-6xl md:font-semibold'>
          Mis proyectos
        </h3>
        <p className='text-lg md:mx-auto md:max-w-3xl md:text-center'>
          🔍 Descubre mis proyectos más recientes 💻 proyectos de{' '}
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

      {isEmpty && <Message />}

      <article className='flex-wrap justify-center gap-6 md:flex'>
        {projectsFilter.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </article>
    </section>
  );
};

export default Projects;
