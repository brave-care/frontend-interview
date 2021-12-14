import { getClinics } from './clinics';

test('it returns the clinics', async () => {
  const clinics = await getClinics();

  expect(clinics).toEqual([
    {
      id: '1',
      name: 'NE Clinic',
      address: '123 Main St',
      city: 'Portland',
      state: 'OR',
      zip: '01234',
      phone: '123-456-7890',
      fax: '123-456-7890',
      openTime: '8:00am',
      closeTime: '5:00pm',
      timeZone: 'America/Los_Angeles',
    },
    {
      id: '2',
      name: 'SE Clinic',
      address: '123 Awesome St',
      city: 'Portland',
      state: 'OR',
      zip: '01234',
      phone: '123-456-7890',
      fax: '123-456-7890',
      openTime: '10:00am',
      closeTime: '10:00pm',
      timeZone: 'America/Los_Angeles',
    },
    {
      id: '3',
      name: 'NY Clinic',
      address: '123 Wall St',
      city: 'New York',
      state: 'NY',
      zip: '01234',
      phone: '123-456-7890',
      fax: '123-456-7890',
      openTime: '10:00am',
      closeTime: '10:00pm',
      timeZone: 'America/New_York',
    },
  ]);
});
