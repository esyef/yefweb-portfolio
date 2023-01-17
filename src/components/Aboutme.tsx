import Image from 'next/image';
import { profile } from '../assets';
import Button from './Button';

const Aboutme = () => (
  <section className='mt-36 lg:mt-80'>
    <div className='lg:flex lg:items-center '>
      <article className='  mb-6 lg:w-2/3'>
        <h1 className='mb-2 text-[2.5rem] font-semibold text-white md:text-[3rem]'>
          Acerca de mí
        </h1>
        <p className='mb-6 text-lg font-light text-white opacity-80 lg:w-4/5'>
          Soy un desarrollador front-end, me especializo en ReactJS para
          construir interfaces de usuario interactivas y aplicaciones de alta
          calidad. Siempre estoy en busca de nuevas habilidades y oportunidades
          para crecer profesionalmente. Si estás buscando un desarrollador
          front-end confiable, dedicado y con una mentalidad de crecimiento
          constante, no dudes en ponerte en contacto conmigo. Estoy ansioso de
          trabajar en proyectos emocionantes y desafiantes con usted.
        </p>
        <Button type='secondary' href='#contacto'>
          Contáctame
        </Button>
      </article>

      <section className='relative lg:w-2/4'>
        <Image
          src={profile}
          alt='Yeferson Olarte Roncancio'
          className='rounded-lg object-contain'
        />
        <div className='blue__gradient absolute right-20 bottom-20 z-[1] h-[35%] w-[50%]' />
      </section>
    </div>
  </section>
);

export default Aboutme;
