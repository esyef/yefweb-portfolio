import Head from 'next/head';
import styles from '../styles/style';
import { Aboutme, Hero, Navbar, Skills } from '../components';

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
      <div className='overflow-hidden bg-primary'>
        <div className='container mx-auto px-6 md:px-14 lg:px-20'>
          <header className=''>
            <Navbar />
          </header>

          <section className=''>
            <Hero />
          </section>

          <main className=''>
            <Aboutme />
            <Skills />
          </main>
        </div>
      </div>
    </>
  );
}
