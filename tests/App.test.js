import React from 'react';
import App from '../src/js/App';
import { create } from 'react-test-renderer';

describe('First test suite', () => {
  test('First test', () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});