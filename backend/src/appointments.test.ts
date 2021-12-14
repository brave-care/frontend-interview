import { getAppointments } from './appointments';

jest
  .useFakeTimers()
  .setSystemTime(new Date('2021-02-02T10:00:00.000').getTime());

test('it returns appointments', async () => {
  const appointments = await getAppointments();

  expect(appointments[0]).toEqual({
    startTime: '2021-02-02T10:00:00.000-08:00',
    endTime: '2021-02-02T10:30:00.000-08:00',
    length: 30,
    clinicId: '1',
  });
});
