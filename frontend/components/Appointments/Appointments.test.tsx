import { render, screen } from '@testing-library/react';
import { appointments } from '../../__mocks__/appointments';
import { Appointments } from '../Appointments';

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
