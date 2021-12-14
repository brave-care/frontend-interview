import { DateTime, Interval } from 'luxon';

interface Appointment {
  startTime: string;
  endTime: string;
}

export async function getAppointments(): Promise<Appointment[]> {
  const openTime = DateTime.now()
    .setZone('America/Los_Angeles')
    .startOf('day')
    .plus({ hours: 10 });
  const closeTime = openTime.plus({ hours: 10 });
  const openInterval = Interval.fromDateTimes(openTime, closeTime);

  return openInterval.splitBy({ minutes: 30 }).map((i) => ({
    startTime: i.start.toISO(),
    endTime: i.end.toISO(),
    length: i.length('minutes'),
  }));
}
