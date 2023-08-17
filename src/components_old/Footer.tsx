import { BiMailSend } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { getYear } from '../constans';
import Form from './Form';

const Footer = () => {
  return (
    <>
      <section
        id='contacto'
        className='mb-6 justify-between  gap-8 p-2 px-4 pt-[120px] pb-20 shadow-2xl shadow-primary lg:flex'
      >
        <article className='mb-8 flex flex-col gap-6 lg:mb-0 lg:w-2/4'>
          <h1 className='text-3xl md:text-center md:text-4xl'>Contáctame</h1>

          <p className='mx-auto max-w-2xl text-lg md:text-center'>
            ¡Hola! 🙋 Muchas gracias 🤗 por visitar mi portafolio profesional
            💼. Si desea ponerse en contacto conmigo 📱 para hablar sobre algún
            proyecto 🚀 o oportunidad de trabajo 💼, tiene varias opciones
            disponibles 📝.
          </p>

          <section className='inline-flex flex-col justify-center gap-6 md:flex-row '>
            <aside className=' flex cursor-pointer items-center rounded-lg bg-gradient-to-tr from-primary to-cyan px-2 py-1'>
              <a
                href='mailto:yeferson.dev@gmail.com'
                className='inline-flex items-center gap-4'
              >
                {' '}
                <BiMailSend size='2.5em' /> yeferson.dev@gmail.com
              </a>
            </aside>
            <aside className='flex cursor-pointer items-center rounded-lg bg-gradient-to-tr from-primary to-cyan px-4 py-1'>
              <a
                href='https://www.linkedin.com/in/yefweb/'
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-4'
              >
                <BsLinkedin size='2em' />
                @Yefweb
              </a>
            </aside>
          </section>
        </article>

        <div className='lg:w-2/5 '>
          <Form />
        </div>
      </section>
      <footer className='full-blend footer flex justify-center gap-2 p-8'>
        <p>{getYear} </p>
        <p> @Yefweb</p>
      </footer>
    </>
  );
};

export default Footer;
