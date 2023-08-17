import Image from 'next/image';
import { pet } from '../assets';
import { profile } from '../constans/profile';
import ContactList from './ContactList';
import SkillsList from './SkillsList';

export default function Sidebar() {
  return (
    <nav className='fixed left-0 top-0 bottom-0 w-3/12 bg-[#374151] p-8 shadow-2xl'>
      <section className='flex flex-col gap-4 py-8'>
        {/* Image profile */}
        <div className='flex justify-center'>
          <Image
            src={pet}
            alt='Pet'
            width={200}
            height={200}
            className='h-[150px] w-[150px] rounded-full  object-cover shadow-xl'
          />
        </div>

        <section className='text-[#f5f5f5]'>
          <h1 className='text-lg'>Yeferson Olarte Roncancio</h1>
          <h2 className='text-base font-bold'>Desarrollador Web</h2>
        </section>
      </section>

      <section className='flex flex-col gap-2'>
        <ContactList />
        <hr className='text-[#b6abab93]' />
        <SkillsList />
      </section>
    </nav>
  );
}
