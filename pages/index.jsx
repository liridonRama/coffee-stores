import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner';

export default function Home() {
  const handleOnClick = () => {
    console.log('hi, banner button');
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connaisseur</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner buttonText={'Coffee Good!'} handleOnClick={handleOnClick} />
      </main>
    </div>
  );
}
