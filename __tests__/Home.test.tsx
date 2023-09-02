import React from 'react';
import { render } from '@testing-library/react-native';

import { Home } from '../src/screens';

describe('Home', () => {
  test('the component rendered', () => {
    render(<Home />);
  });
});
