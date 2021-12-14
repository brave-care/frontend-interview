import { getAppointments } from './appointments';

test('it returns appointments', async () => {
  const appointments = await getAppointments();

  expect(appointments[0]).toEqual({
    startTime: '10:00 AM',
    endTime: '10:30 AM',
    length: 30,
  });
  expect(appointments[appointments.length - 1]).toEqual({
    startTime: '7:30 PM',
    endTime: '8:00 PM',
    length: 30,
  });
});
