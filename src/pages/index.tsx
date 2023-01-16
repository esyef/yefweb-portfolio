import Head from 'next/head';
import styles from '../styles/style';
import { Aboutme, Hero, Navbar } from '../components';

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
      <div className='overflow-hidden bg-primary '>
        <div className='boxWidth'>
          <header className={`${styles.paddingX} ${styles.flexCenter}`}>
            <Navbar />
          </header>

          <section className={`bg-primary ${styles.flexStart}`}>
            <Hero />
          </section>

          <main className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
            <Aboutme />
          </main>
        </div>
      </div>
    </>
  );
}
