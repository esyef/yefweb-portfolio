import Image from 'next/image';
import React from 'react';
import { hero } from '../assets';
import styles from '../styles/style';
import Button from './Button';

const Hero = () => (
  <section
    id='inicio'
    className={`${styles.paddingY} relative flex max-w-7xl flex-col md:flex-row `}
  >
    <section
      className={`flex flex-1 flex-col items-start px-6  sm:px-16 xl:px-0`}
    >
      <article
        className={`bg-accent-gradient flex flex-row items-center rounded-[10px] py-[1rem] px-4`}
      >
        <div className='mr-2 h-[10px] w-[10px] rounded-full bg-emerald-300' />
        <p className={`${styles.paragraph}`}>
          <span className='text-white'>¡Bienvenido </span>a mi sitio web
          <span className='text-white'> profesional!</span>
        </p>
      </article>

      <section className='mt-5 flex w-full flex-row flex-wrap items-center justify-between'>
        <h1 className='flex-1 font-poppins text-[2.5rem] font-semibold text-white lg:text-[3.5rem] '>
          Me llamo Yeferson
          <br className='hidden sm:block' />
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

    <div className={`flex flex-1 ${styles.flexCenter} my-10 md:my-0 `}>
      <Image
        src={hero}
        width={700}
        height={700}
        alt='ilustracion'
        className='h-[100%] w-[100%] '
      />
    </div>

    <div className='pink__gradient absolute top-0 z-[0] h-[35%] w-[90%]' />
    <div className='withe__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full' />
    <div className='blue__gradient absolute right-20 bottom-20 z-[0] h-[35%] w-[50%]' />
  </section>
);

export default Hero;
