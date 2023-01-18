import Image from 'next/image';
import { hero } from '../assets';
import Button from './Button';

const Hero = () => (
  <section className=' md:flex md:flex-wrap md:justify-end'>
    <article className='md:w-1/2'>
      <h1 className='text-3xl tracking-widest'>Soy Yeferson</h1>
      <h2 className='text-gradient text-2xl tracking-widest'>
        Desarrollador Front-End
      </h2>

      <p className='max-w-[620px]'>
        Me dedico a crear soluciones interactivas y atractivas para los
        usuarios. Aquí podrás ver mis proyectos y conocer más sobre mi
        experiencia y habilidades. <br />
        ¡Disfruta tu visita!
      </p>
    </article>

    <div className='md:flex md:w-3/6 md:items-end md:justify-end'>
      <Image
        src={hero}
        alt='ilustracion'
        className='h-[100%] w-[100%] object-contain'
      />
    </div>
  </section>
);
export default Hero;
