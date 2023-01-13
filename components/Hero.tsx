import Image from 'next/image';
import React from 'react';
import { hero } from '../assets';
import styles from '../styles/style';
import Button from './Button';

const Hero = () => (
  <section
    id='inicio'
    className={`${styles.paddingY} flex md:flex-row flex-col relative`}
  >
    <section
      className={`flex-1 flex-col xl:px-0 sm:px-16 px-6  flex items-start`}
    >
      <article
        className={`flex flex-row items-center py-[1rem] px-4 bg-accent-gradient rounded-[10px]`}
      >
        <div className='h-[10px] w-[10px] bg-emerald-300 mr-2 rounded-full' />
        <p className={`${styles.paragraph}`}>
          <span className='text-white'>¡Bienvenido </span>a mi sitio web
          <span className='text-white'> profesional!</span>
        </p>
      </article>

      <section className='flex flex-row justify-between items-center w-full flex-wrap mt-5'>
        <h1 className='flex-1 font-poppins font-semibold text-[2.5rem] lg:text-[3.5rem] text-white '>
          Me llamo Yeferson
          <br className='sm:block hidden' />
          <span className='text-gradient'> Desarrollador Front-End</span>
        </h1>
      </section>

      <p className={`${styles.paragraph} max-w-[590px]`}>
        Soy un desarrollador web especializado en ReactJS, me dedico a crear
        soluciones interactivas y atractivas para los usuarios. Aquí podrás ver
        mis proyectos y conocer más sobre mi experiencia y habilidades.
        ¡Disfruta tu visita!
      </p>

      <Button styles='mt-5' href='#proyectos'>
        Ver proyectos
      </Button>
    </section>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 `}>
      <Image
        src={hero}
        width={700}
        height={700}
        alt='ilustracion'
        className='w-[100%] h-[100%] '
      />
    </div>

    <div className='absolute z-[0] w-[90%] h-[35%] top-0 pink__gradient' />
    <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 withe__gradient rounded-full' />
    <div className='absolute z-[0] w-[50%] h-[35%] right-20 bottom-20 blue__gradient' />
  </section>
);

export default Hero;
