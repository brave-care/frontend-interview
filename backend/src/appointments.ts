import { DateTime, Interval } from 'luxon';

interface Appointment {
  startTime: string;
  endTime: string;
  length: number;
  clinicId: string;
}

export async function getAppointments(): Promise<Appointment[]> {
  // Start with today
  const now = DateTime.now().setZone('America/Los_Angeles').startOf('day');

  // Get each day for the next 2 months
  const dates = Interval.fromDateTimes(now, now.plus({ months: 2 })).splitBy({
    days: 1,
  });

  // For each day in the next 2 months, return an interval of an available open times (9am to 9pm)
  const clinicOpenIntervals = dates.map((interval) => {
    const start = interval.start.set({ hour: 9, minute: 0 }).startOf('minute');
    const end = interval.start.set({ hour: 21, minute: 0 }).startOf('minute');
    return Interval.fromDateTimes(start, end);
  });

  // We'll have 3 clinics (see the /clinics endpoint for specific mocked data per clinic)
  const clinicIds = [1, 2, 3];

  // For each clinic, return a single array of available appointment slots during the open intervals
  const appointments = clinicIds.flatMap((id) => {
    const appointmentsPerOpenIntervals = clinicOpenIntervals.flatMap(
      (openInterval) => {
        const appointmentTimeSlots = openInterval.splitBy({ minutes: 30 });
        const appointment = appointmentTimeSlots.map((slot) => ({
          startTime: slot.start.toISO(),
          endTime: slot.end.toISO(),
          length: slot.length('minutes'),
          clinicId: `${id}`,
        }));

        return appointment;
      }
    );

    return appointmentsPerOpenIntervals;
  });

  return appointments;
}
