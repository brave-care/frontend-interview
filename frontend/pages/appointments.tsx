import { FC, useEffect, useState } from 'react';
import styles from '../styles/Appointments.module.css';

interface Appointment {
  startTime: string;
  endTime: string;
}

const Appointments: FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  async function fetchAppointments() {
    const res = await fetch(`http://localhost:3001/appointments`);
    setAppointments(await res.json());
  }

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.description}>
        We have some appointments available for you.
      </p>
      <div className={styles.appointments}>
        {appointments.map((appointment) => (
          <p key={appointment.startTime}>
            {appointment.startTime} - {appointment.endTime}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
