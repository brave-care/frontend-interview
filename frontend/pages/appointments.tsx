import { DateTime } from 'luxon';
import { FC } from 'react';
import styles from '../styles/Appointments.module.css';

interface Appointment {
  clinicId: string;
  endTime: string;
  length: number;
  startTime: string;
}

interface Props {
  appointments: Appointment[];
}

const Appointments: FC<Props> = ({ appointments }) => {
  return (
    <div>
      <p className={styles.description}>
        We have some appointments available for you.
      </p>
      <div className={styles.appointments}>
        {appointments.map((appointment) => {
          const formattedStartTime = DateTime.fromISO(
            appointment.startTime
          ).toFormat('hh:mm a');
          const formattedEndTime = DateTime.fromISO(
            appointment.endTime
          ).toFormat('hh:mm a');

          return (
            <p key={`${appointment.clinicId}-${formattedStartTime}`}>
              {formattedStartTime} - {formattedEndTime}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Appointments;
