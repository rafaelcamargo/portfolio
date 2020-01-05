import React from 'react';
import { shallow } from 'enzyme';
import { RCode } from './code';

describe('Code', () => {
  function mount(props = {}){
    return shallow(
      <RCode>
        { props.content }
      </RCode>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-code');
  });

  it('should contain a story viewport', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello!');
  });
});
