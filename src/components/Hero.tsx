import Image from 'next/image';
import { hero } from '../assets';
import Button from './Button';

const Hero = () => (
  <section className='pt-12 lg:pt-24'>
    <div className='relative lg:flex lg:items-center'>
      <div className=''>
        <h1 className='mb-2 text-[3rem] font-semibold text-white'>
          Soy Yeferson
        </h1>
        <h2 className='text-gradient mb-8 text-[2.5rem] font-medium'>
          Desarrollador Front-End
        </h2>
        <p className='mb-8 w-full text-lg text-gray-400 lg:max-w-[490px]'>
          Me dedico a crear soluciones interactivas y atractivas para los
          usuarios. Aquí podrás ver mis proyectos y conocer más sobre mi
          experiencia y habilidades. ¡Disfruta tu visita!
        </p>
        <Button type='primary' href='#proyectos'>
          Ver proyectos
        </Button>
      </div>
      <div className='lg-mt-0 mt-12 lg:absolute lg:-right-44 lg:w-4/6 '>
        <Image
          src={hero}
          alt='ilustracion'
          className=' w-[100%] object-contain'
        />
      </div>

      <div className='pink__gradient absolute top-0 z-[1] h-[35%] w-[90%]' />
      <div className='withe__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full' />
      <div className='blue__gradient absolute right-20 bottom-20 z-[1] h-[35%] w-[50%]' />
    </div>
  </section>
);
export default Hero;
