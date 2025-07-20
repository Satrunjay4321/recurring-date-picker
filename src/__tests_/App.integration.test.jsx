import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders recurrence options', () => {
  render(<App />);
  expect(screen.getByText(/Recurring Date Picker/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
  expect(screen.getByText(/Daily/i)).toBeInTheDocument();
});

test('changing frequency updates calendar', () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Weekly/i));
  expect(screen.getByText(/Weekly/)).toHaveClass('bg-purple-500');
});
