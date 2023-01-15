import Image from 'next/image';
import { profile } from '../assets';

const Aboutme = () => (
  <section className='relative py-12'>
    <div className='mx-auto max-w-screen-xl px-4'>
      <section className='flex flex-col items-center justify-between gap-8 md:flex-row'>
        <div className='md:w-1/3'>
          <Image
            src={profile}
            alt='Foto de Perfil'
            className='mx-auto h-auto w-full rounded-full object-cover mix-blend-difference ss:h-96 ss:w-96 md:mx-0 md:mr-6'
          />
        </div>
        <div className='flex flex-col gap-6 md:w-2/3'>
          <h2 className='text-center text-4xl font-medium text-dimWhite md:text-left'>
            Yeferson Olarte Roncancio
          </h2>
          <p className='paragraph text-center text-lg md:text-left'>
            Soy un desarrollador web apasionado por aprender y crear soluciones
            innovadoras utilizando las últimas tecnologías frontend. Mi
            experiencia incluye trabajar con React, Next.js, JavaScript, HTML y
            CSS. Me gusta trabajar en equipo y siempre estoy buscando nuevos
            desafíos y oportunidades para crecer en mi carrera y mejorar mis
            habilidades en las tecnologías frontend.
          </p>
        </div>
      </section>
    </div>

    <div className='pink__gradient absolute top-0 z-[0] h-[35%] w-[90%]' />
    <div className='withe__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full' />
    <div className='blue__gradient absolute right-20 bottom-20 z-[0] h-[35%] w-[50%]' />
  </section>
);

export default Aboutme;

{
  /*  */
}
