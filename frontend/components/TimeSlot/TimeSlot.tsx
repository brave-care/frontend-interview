import { DateTime } from 'luxon';
import styles from '../../styles/TimeSlot.module.css';

export const TimeSlot = ({
  endTime,
  startTime,
}: {
  endTime: string;
  startTime: string;
}) => {
  const formattedStartTime = DateTime.fromISO(startTime).toFormat('hh:mm a');
  const formattedEndTime = DateTime.fromISO(endTime).toFormat('hh:mm a');

  return (
    <button className={styles.slot}>
      {formattedStartTime} - {formattedEndTime}
    </button>
  );
};
