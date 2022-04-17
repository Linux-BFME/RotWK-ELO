import {render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders form', () => {
  render(<App />);
  const linkElement = screen.getByText(/winner gr/i);
  expect(linkElement).toBeInTheDocument();
});
