import Image from 'next/image';
import { hero } from '../assets';
import Button from './Button';

const Hero = () => (
  <section className='mb-24 md:flex md:flex-wrap'>
    <article className='mb-6 flex flex-col gap-6  md:mb-0 md:w-1/2'>
      <div>
        <h1 className='text-3xl tracking-widest'>Soy Yeferson</h1>
        <h2 className='text-gradient text-2xl tracking-widest'>
          Desarrollador Front-End
        </h2>
      </div>

      <p className='max-w-[620px]'>
        Me dedico a crear soluciones interactivas y atractivas para los
        usuarios. Aquí podrás ver mis proyectos y conocer más sobre mi
        experiencia y habilidades. ¡Disfruta tu visita!
      </p>

      <div className=''>
        <Button href='#proyectos' type='primary' target='_blank'>
          Ver proyectos
        </Button>
      </div>
    </article>

    <div className='md:w-3/6'>
      <Image
        src={hero}
        alt='ilustracion'
        className='h-[100%] w-[100%] object-contain'
      />
    </div>
  </section>
);
export default Hero;
