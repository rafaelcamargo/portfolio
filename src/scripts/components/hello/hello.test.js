import React from 'react';
import { shallow } from 'enzyme';
import { Hello } from '@scripts/components/hello/hello';

describe('Hello', () => {
  it('should have appropriate css class', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.prop('className')).toEqual('hello');
  });

  it('should say Hello World by default', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find('div').text().trim()).toEqual('Hello World!');
  });

  it('should optionally say hello to everything else', () => {
    const wrapper = shallow(<Hello name="Camargo"/>);
    expect(wrapper.find('div').text().trim()).toEqual('Hello Camargo!');
  });
});
