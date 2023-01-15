import Image from 'next/image';
import { profile } from '../assets';
import styles, { layout } from '../styles/style';

const Aboutme = () => (
  <section className={`${layout.sectionReverse} relative  mt-10 px-4`}>
    <div className='-rigth-1/2 white__gradient absolute  top-0 -z-[3] h-[80%] w-[90%] rounded-full' />
    <div className='-rigth-1/2 pink__gradient absolute  bottom-0 z-[0] h-[90%] w-[50%] rounded-full' />
    <div className={layout.sectionImgReverse}>
      <Image
        src={profile}
        alt='Yeferson Olarte'
        className='h-[100%] w-[100%]'
      />
    </div>

    <section className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Acerca de mí</h2>
      <p className={`mt-5 max-w-[470px] text-dimWhite`}>
        Soy un apasionado desarrollador frontend con experiencia en ReactJS y
        estudiante de ingeniería de sistemas en Bogotá. Mi experiencia en el
        desarrollo de interfaces de usuario atractivas y fáciles de usar me
        permite crear soluciones digitales que no solo se ven bien, sino que
        también son intuitivas y fáciles de usar para el usuario final. Me
        apasiona trabajar en proyectos desafiantes y siempre estoy buscando
        aprender y mejorar mis habilidades. En mi tiempo libre, disfruto de
        aprender nuevas tecnologías y seguir las tendencias en el mundo del
        desarrollo web. Estoy emocionado de continuar mi carrera en el campo de
        la tecnología y ayudar a las empresas a alcanzar sus objetivos
        digitales.
      </p>
    </section>
  </section>
);

export default Aboutme;
