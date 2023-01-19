import Image from 'next/image';
import { profile } from '../assets';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

import Button from './Button';

const Aboutme = () => {
  return (
    <section id='sobre-mi' className='pt-[90px]'>
      <article className='py-6'>
        <h1 className='mb-6  text-4xl font-bold md:text-center md:text-6xl'>
          Acerca de mí
        </h1>
        <article className=' gap-[2em] md:flex md:justify-between'>
          <div className='mb-6   flex flex-col gap-6 self-center md:mb-0'>
            <p className='max-w-[520px] text-lg'>
              Soy un desarrollador front-end, me especializo en ReactJS para
              construir interfaces de usuario interactivas y aplicaciones de
              alta calidad. Siempre estoy en busca de nuevas habilidades y
              oportunidades para crecer profesionalmente. Si estás buscando un
              desarrollador front-end confiable, dedicado y con una mentalidad
              de crecimiento constante, no dudes en ponerte en contacto conmigo.
              Estoy ansioso de trabajar en proyectos emocionantes y desafiantes
              con usted.
            </p>
            <div>
              <Button href='#contacto' type='secondary'>
                <MdOutlineMarkEmailUnread />
                Contáctame
              </Button>
            </div>
          </div>

          <div className='md:w-3/6'>
            <Image
              src={profile}
              alt='Yeferson Olarte Roncancio'
              className='rounded-lg object-cover '
            />
          </div>
        </article>
      </article>
    </section>
  );
};

export default Aboutme;
