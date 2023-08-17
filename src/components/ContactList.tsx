import { profile } from '../constans/profile';

export default function ContactList() {
  return (
    <>
      <h2 className='text-[#f5f5f5b7]'>Contacto</h2>

      <ul>
        {profile.map((prof) => {
          return (
            <li className='' key={prof.title}>
              <a
                href={`${prof.title === 'Email' ? prof.mailto : prof.url}`}
                target={`${prof.title !== 'Email' ? '_blank' : ''}`}
                className='flex items-center gap-2 text-lg text-[#f5f5f5]'
              >
                <prof.icon />
                <p>{prof.text}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
