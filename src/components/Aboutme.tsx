import Image from 'next/image';
import { profile } from '../assets';
import Button from './Button';

const Aboutme = () => (
  <section className='relative py-12'>
    <div className='px-4'>
      <section className='flex flex-col items-center  justify-between gap-8 md:flex-row'>
        <div className='md:order-2 md:w-1/3'>
          <Image
            src={profile}
            alt='Foto de Perfil'
            className='mx-auto h-[50%] w-[100%] rounded-md object-cover mix-blend-difference'
          />
        </div>
        <div className='flex flex-col gap-6 md:w-2/3'>
          <h2 className='heading2 font-medium text-dimWhite'>
            Yeferson Olarte Roncancio
          </h2>
          <p className='paragraph max-w-[650px]'>
            Soy un desarrollador web apasionado por aprender y crear soluciones
            innovadoras utilizando las últimas tecnologías frontend. Mi
            experiencia incluye trabajar con React, Next.js, JavaScript, HTML y
            CSS. Me gusta trabajar en equipo y siempre estoy buscando nuevos
            desafíos y oportunidades para crecer en mi carrera y mejorar mis
            habilidades en las tecnologías frontend.
          </p>
          <div className='relative z-50'>
            <Button type='secondary' href='#contacto'>
              Contáctame
            </Button>
          </div>
        </div>
      </section>
    </div>

    {/* Gradient decoration */}
    <div className='pink__gradient absolute top-0 z-[0] h-[35%] w-[90%]' />
    <div className='withe__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full' />
    <div className='blue__gradient absolute right-20 bottom-20 z-[0] h-[35%] w-[50%]' />
  </section>
);

export default Aboutme;

{
  /*  */
}
