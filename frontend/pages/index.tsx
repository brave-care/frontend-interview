import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Brave Care</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Brave Care</h1>

        <p className={styles.description}>
          We have some appointments available for you.
        </p>
      </main>
    </div>
  );
};

export default Home;
