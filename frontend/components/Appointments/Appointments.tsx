import { DateTime } from 'luxon';
import { FC, Fragment } from 'react';
import styles from '../../styles/Appointments.module.css';
import { TimeSlot } from '../TimeSlot';

interface Appointment {
  clinicId: string;
  endTime: string;
  length: number;
  startTime: string;
}

interface Props {
  appointments: Appointment[];
}

export const Appointments: FC<Props> = ({ appointments }) => {
  return (
    <Fragment>
      <p className={styles.description}>
        We have some appointments available for you.
      </p>
      <div className={styles.appointments}>
        {appointments.map((appointment) => {
          const { clinicId, startTime, endTime } = appointment;
          const condensedTime = DateTime.fromISO(startTime).toFormat('HHmm');

          return (
            <TimeSlot
              key={`${clinicId}-${condensedTime}`}
              endTime={endTime}
              startTime={startTime}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
