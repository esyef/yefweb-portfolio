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
  <div className='projectCard mb-6 max-w-[320px] rounded-lg bg-primary bg-opacity-95 md:mb-0'>
    <div className='relative flex items-end justify-center'>
      <Image
        className='w-full rounded-lg '
        src={imageurl(project.imgUrl).toString()}
        alt={project.title}
        width={250}
        height={250}
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
        title='Ir a gitbut'
      >
        <AiFillGithub size='2.5rem' className='hover:text-accentText' />
        <Tooltip
          anchorId='github'
          content='Ver codigo en Github'
          place='right'
        />
      </Link>

      <Link
        href={project.projectLink}
        target='_blank'
        id='website'
        data-tooltip-content='Visitar sitio web'
      >
        <GoBrowser size='2.5rem' className='hover:text-accentText' />
        <Tooltip anchorId='website' />
      </Link>
    </div>
  </div>
);

export default ProjectCard;
