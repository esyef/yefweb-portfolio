import Image from 'next/image';
import { hero } from '../assets';
import Button from './Button';

const Hero = () => (
  <section className=''>
    Soy Yeferson Desarrollador Front-End Me dedico a crear soluciones
    interactivas y atractivas para los usuarios. Aquí podrás ver mis proyectos y
    conocer más sobre mi experiencia y habilidades. ¡Disfruta tu visita!
    <Image src={hero} alt='ilustracion' className='' />
  </section>
);
export default Hero;
