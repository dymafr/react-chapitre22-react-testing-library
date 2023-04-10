import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import Comp from './Comp';

test('should call cb', () => {
  const { getByText } = render(<Comp />);
  const elem = getByText(/World/);
  expect(elem).toBeInTheDocument();
});
