import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
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
      <div className='w-full overflow-hidden bg-primary '>
        <header className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </header>

        <section className={`bg-primary ${styles.flexStart}`}>
          <article className={`${styles.boxWidth}`}>
            <Hero />
          </article>
        </section>

        <main className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
          <section className={`${styles.boxWidth}`}>
            {/* <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
          <Clients /> <CTA /> <Footer /> */}

            <Aboutme />
          </section>
        </main>
      </div>
    </>
  );
}
