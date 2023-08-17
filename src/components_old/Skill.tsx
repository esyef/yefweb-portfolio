import { SKILLS } from '../types/sanity';

import Image from 'next/image';
import { imageurl } from '../ services';

type PROPS = {
  skill: SKILLS;
};

const Skill = ({ skill }: PROPS) => {
  const { name, icon } = skill;
  return (
    <div key={name} className='flex flex-col items-center justify-center gap-1'>
      <Image
        src={imageurl(icon).toString()}
        alt={name}
        width={76}
        height={76}
        className='object-contain'
      />
      <span className='text-sm text-white'>{name}</span>
    </div>
  );
};

export default Skill;
