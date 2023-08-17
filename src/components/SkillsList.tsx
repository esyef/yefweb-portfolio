import { skills } from '../constans/profile';

export default function SkillsList() {
  return (
    <>
      <h2 className='title_list '>Habilidades</h2>

      <ul className='list'>
        {skills.map((skill) => {
          return (
            <li className='flex flex-col items-center' key={skill.desc}>
              <skill.icon className='text-2xl' />
              <p className='text-lg tracking-wider'>{skill.desc}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
