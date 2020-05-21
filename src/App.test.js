import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders sauti header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/sauti/i);
  expect(linkElement).toBeInTheDocument();
});
