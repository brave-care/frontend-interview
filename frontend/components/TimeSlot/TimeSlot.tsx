import { DateTime } from 'luxon';
import { FC } from 'react';
import styles from '../../styles/TimeSlot.module.css';

export const TimeSlot: FC<{
  endTime: string;
  startTime: string;
}> = ({ endTime, startTime }) => {
  const formattedStartTime = DateTime.fromISO(startTime).toFormat('hh:mm a');
  const formattedEndTime = DateTime.fromISO(endTime).toFormat('hh:mm a');

  return (
    <button className={styles.slot}>
      {formattedStartTime} - {formattedEndTime}
    </button>
  );
};
