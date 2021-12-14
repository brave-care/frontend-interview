import { FC } from 'react';
import styles from '../styles/Appointments.module.css';

interface Appointment {
  startTime: string;
  endTime: string;
}

interface Props {
  appointments: Appointment[];
}

const Appointments: FC<Props> = ({ appointments }) => {
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
