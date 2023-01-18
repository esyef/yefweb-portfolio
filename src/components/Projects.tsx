import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client, imageurl } from '../ services';
import { darkPattern, patternavir } from '../assets';
import { PROJECTS } from '../types/sanity';
import Button from './Button';

const filterItems = ['UI/UX', 'ReactJs', 'All'];

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

  const handleFilter = (item: string) => {
    setFilter(item);

    if (item === 'All') {
      setProjectsFilter(projects);
    } else {
      setProjectsFilter(
        projects.filter((element) => element.tags.includes(item))
      );
    }
  };

  return <section className='relative mt-36'></section>;
};

export default Projects;
