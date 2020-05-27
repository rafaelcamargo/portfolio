import React from 'react';
import { shallow } from 'enzyme';
import { RTime } from './time';

describe('Time', () => {
  function mount(props = {}){
    const dateTime = props.dateTime || '2020-05-26';
    const lang = props.lang || 'pt';
    return shallow(
      <RTime dateTime={ dateTime } lang={ props.lang } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-time');
  });

  it('should render a date', () => {
    const wrapper = mount({ dateTime: '1984-03-14', lang: 'en' });
    expect(wrapper.prop('dateTime')).toEqual('1984-03-14');
    expect(wrapper.text()).toEqual('3/14/1984');
  });
});
