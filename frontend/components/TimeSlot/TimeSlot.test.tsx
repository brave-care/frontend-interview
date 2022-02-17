import { render, screen } from '@testing-library/react';
import { TimeSlot } from '../TimeSlot';

describe('TimeSlot', () => {
  it('renders a time slot', () => {
    const startTime = '2022-02-01T10:00:00.000-08:00';
    const endTime = '2022-02-01T10:30:00.000-08:00';

    render(<TimeSlot endTime={endTime} startTime={startTime} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
