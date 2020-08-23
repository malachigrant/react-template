/** @jsx jsx */
import { create } from 'react-test-renderer';
import { jsx } from '@emotion/core';

import App from '../src/App';

describe('App', () => {
  it('renders correctly', () => {
    const tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
