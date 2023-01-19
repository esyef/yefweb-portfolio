import Image from 'next/image';
import Link from 'next/link';
import { imageurl } from '../ services';
import { PROJECTS } from '../types/sanity';
import { AiFillGithub } from 'react-icons/ai';
import { GoBrowser } from 'react-icons/go';
import { Tooltip } from 'react-tooltip';

type PROPS = {
  project: PROJECTS;
};

const ProjectCard = ({ project }: PROPS) => (
  <div className=' projectCard rounded-lg bg-primary bg-opacity-95 lg:w-[33%]'>
    <div className='relative flex items-end justify-center'>
      <Image
        className='w-[100%] rounded-lg '
        src={imageurl(project.imgUrl).toString()}
        alt={project.title}
        width={320}
        height={320}
      />
      <span className='absolute inline-block rounded-t-lg bg-white px-4 py-2 text-primary'>
        {project.tags[0]}
      </span>
    </div>

    <div className='px-6 py-4'>
      <h2 className='mb-2 text-lg font-bold'>{project.title}</h2>
      <p className='text-sm text-white'>{project.description}</p>
    </div>

    {/* Custon class globals.css */}
    <div className='cta hidden'>
      <Link
        href={project.codeLink}
        target='_blank'
        id='github'
        data-tooltip-content='Ver código en github'
      >
        <AiFillGithub size='2.5rem' className='hover:text-accentText' />
      </Link>

      <Link
        href={project.projectLink}
        target='_blank'
        id='website'
        data-tooltip-content='Visitar sitio web'
      >
        <GoBrowser size='2.5rem' className='hover:text-accentText' />
      </Link>
      <Tooltip anchorId='website' />
      <Tooltip anchorId='github' />
    </div>
  </div>
);

export default ProjectCard;
