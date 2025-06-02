import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

test('renders button label', () => {
  render(<Button label="Click me" />);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});
