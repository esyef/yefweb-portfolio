import Image from 'next/image';
import { profile } from '../assets';

import Button from './Button';

const Aboutme = () => {
  return (
    <section id='sobre-mi' className='pt-[90px]'>
      <div>
        <h1 className=''>Acerca de mí</h1>
        <p className=''>
          Soy un desarrollador front-end, me especializo en ReactJS para
          construir interfaces de usuario interactivas y aplicaciones de alta
          calidad. Siempre estoy en busca de nuevas habilidades y oportunidades
          para crecer profesionalmente. Si estás buscando un desarrollador
          front-end confiable, dedicado y con una mentalidad de crecimiento
          constante, no dudes en ponerte en contacto conmigo. Estoy ansioso de
          trabajar en proyectos emocionantes y desafiantes con usted.
        </p>

        <Image
          src={profile}
          alt='Yeferson Olarte Roncancio'
          className='rounded-lg object-contain'
        />
      </div>
    </section>
  );
};

export default Aboutme;
