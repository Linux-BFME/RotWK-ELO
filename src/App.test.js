import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form', () => {
  render(<App />);
  const linkElement = screen.getByText(/winner gr/i);
  expect(linkElement).toBeInTheDocument();
});
