import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Appointments from './appointments';

function Home({
  appointments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Brave Care</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Brave Care</h1>

        <Appointments appointments={appointments} />
      </main>
    </div>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3001/appointments`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      appointments: data,
    },
  };
};
