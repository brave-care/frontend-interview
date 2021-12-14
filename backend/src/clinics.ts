import clinics from '../data/clinics.json';

interface Clinics {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  fax: string;
  openTime: string;
  closeTime: string;
  timeZone: string;
}

export async function getClinics(): Promise<Clinics[]> {
  return clinics;
}
