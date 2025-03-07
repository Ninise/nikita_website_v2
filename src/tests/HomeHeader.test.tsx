import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomeHeader } from '../components/home/HomeHeader';
import '@testing-library/jest-dom';

test('renders HomeHeader component', () => {
  render(<HomeHeader fun={() => {}} />);
  const headerElement = screen.getByText(/MENU/i);
  expect(headerElement).toBeInTheDocument();
});