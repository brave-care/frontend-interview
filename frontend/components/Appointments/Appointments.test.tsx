import { render, screen } from '@testing-library/react';
import { Appointments } from '../Appointments';

const appointments = [
  {
    startTime: '2022-02-01T10:00:00.000-08:00',
    endTime: '2022-02-01T10:30:00.000-08:00',
    length: 30,
    clinicId: '1',
  },
  {
    startTime: '2022-02-01T10:30:00.000-08:00',
    endTime: '2022-02-01T11:00:00.000-08:00',
    length: 30,
    clinicId: '1',
  },
  {
    startTime: '2022-02-01T11:00:00.000-08:00',
    endTime: '2022-02-01T11:30:00.000-08:00',
    length: 30,
    clinicId: '1',
  },
];

describe('Appointments', () => {
  it('renders a title', () => {
    render(<Appointments appointments={appointments} />);

    const title = screen.getByText(
      /We have some appointments available for you./
    );

    expect(title).toBeInTheDocument();
  });

  it('renders time slots', () => {
    render(<Appointments appointments={appointments} />);
    const buttons = screen.getAllByRole('button');
    buttons.map((button) => expect(button).toBeInTheDocument());
  });
});
