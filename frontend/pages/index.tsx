import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Appointments from './appointments';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Brave Care</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Brave Care</h1>

        <Appointments />
      </main>
    </div>
  );
};

export default Home;
