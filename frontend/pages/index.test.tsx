/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './index';

describe('Home', () => {
  it('renders our heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Welcome to Brave Care/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
