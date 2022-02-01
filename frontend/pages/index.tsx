import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Appointments } from '../components/Appointments';
import styles from '../styles/Home.module.css';

function Home({
  appointments,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>When do you want to visit?</h1>
      <Appointments appointments={appointments} />
    </main>
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
