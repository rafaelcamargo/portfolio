import React from 'react';
import { shallow } from 'enzyme';
import { RAvatar } from '@scripts/components/avatar/avatar';

describe('Icon', () => {
  function mount(props = {}){
    return shallow(
      <RAvatar image={ props.image } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount({ image: 'camargo.jpg' });
    expect(wrapper.prop('className')).toEqual('r-avatar');
  });

  it('should render a specific icon', () => {
    const wrapper = mount({ image: 'camargo.jpg' });
    expect(wrapper.prop('style')).toEqual({
      backgroundImage: 'url("images/camargo.jpg")'
    });
  });
});
