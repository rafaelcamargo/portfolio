import React from 'react';
import { shallow } from 'enzyme';
import { Hello } from '@scripts/components/hello/hello';
import { Home } from './home';

describe('Home', () => {
  it('should contain a Hello component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Hello).prop('name')).toEqual('World');
  });
});
