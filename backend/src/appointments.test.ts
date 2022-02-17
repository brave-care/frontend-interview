import { getAppointments } from './appointments';

beforeEach(() => {
  jest
    .useFakeTimers()
    .setSystemTime(new Date('2021-02-02T09:00:00.000').getTime());
});

afterEach(() => {
  jest.useRealTimers();
});

test('it returns appointments', async () => {
  const appointments = await getAppointments();

  expect(appointments[0]).toEqual({
    startTime: '2021-02-02T09:00:00.000-08:00',
    endTime: '2021-02-02T09:30:00.000-08:00',
    length: 30,
    clinicId: '1',
  });
});
