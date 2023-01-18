import Head from 'next/head';
import { Aboutme, Hero, Navbar, Skills, Projects } from '../components';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Yefweb - Sitio web profesional</title>
        <meta
          name='description'
          content='Portafolio profesional Yeferson Olarte Roncancio @yefweb'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <div className='overflow-hidden bg-primary bg-[url("../assets/dark-pattern.jpg")] bg-contain bg-repeat-round'>
        <div className=''>
          <header className=''>
            <Navbar />
          </header>

          <section className=''>
            <Hero />
          </section>

          <main className=''>
            <Aboutme />
            <Skills />
            <Projects />
          </main>
        </div>
      </div>
    </>
  );
}
