import Image from 'next/image';
import { hero } from '../assets';
import { BiCodeCurly } from 'react-icons/bi';
import Button from './Button';

const Hero = () => {
  return (
    <section id='inicio' className='mb-16 pt-[90px] '>
      <div className='mt-3 inline-flex flex-row items-center gap-4 rounded-lg bg-gradient-to-tr from-primary to-cyan px-4 py-2'>
        <span className='dot inline-block' />
        <p className=''>¡Bienvenido a mi sitio web profesional!</p>
      </div>

      <div className='py-6 md:flex md:flex-wrap'>
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
            <Button href='#proyectos' type='primary'>
              Ver proyectos
              <BiCodeCurly />
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
      </div>
    </section>
  );
};
export default Hero;
