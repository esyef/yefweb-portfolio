import { IconType } from 'react-icons';
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillHtml5,
} from 'react-icons/ai';
import { PiFileSqlBold } from 'react-icons/pi';

import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoCss3 } from 'react-icons/bi';

type icon = IconType;
export type Profile = {
  icon: icon;
  title: string;
  text?: string;
  mailto?: string;
  url?: string;
};

export const profile: Profile[] = [
  {
    icon: AiOutlineMail,
    title: 'Email',
    mailto: 'mailto:yeferson.tech@gmail.com',
    text: 'yeferson.tech@gmail.com',
  },
  {
    icon: AiFillLinkedin,
    title: 'Linkedin',
    text: '@esyef',
    url: 'https://www.linkedin.com/in/esyef/',
  },
  {
    icon: AiFillGithub,
    title: 'Github',
    text: '@es-yef',
    url: 'https://github.com/es-yef',
  },
];

type Skill = {
  icon: icon;
  desc: string;
};

export const skills: Skill[] = [
  {
    icon: TbBrandNextjs,
    desc: 'Nextjs',
  },
  {
    icon: AiFillHtml5,
    desc: 'HTML5',
  },
  {
    icon: BiLogoCss3,
    desc: 'CSS',
  },
  {
    icon: AiFillGithub,
    desc: 'Git',
  },
  {
    icon: PiFileSqlBold,
    desc: 'SQL',
  },
];
