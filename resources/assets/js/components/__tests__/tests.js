import React from 'react';
import { shallow } from 'enzyme';
import Index from '../../Index';

describe('example tests', () => {
  test('should test expectations here', () => {
    const container = shallow(<Index />);
    const form = container.find('Form');
    expect(form).toHaveLength(1);
  });
});
