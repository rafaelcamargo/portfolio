import React from 'react';
import { shallow } from 'enzyme';
import { RAvatar } from '@scripts/base/components/avatar/avatar';

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

  it('should render a specific image', () => {
    const wrapper = mount({ image: 'avatar-camargo.jpg' });
    expect(wrapper.find('img').prop('src')).toEqual('assets/images/avatar-camargo.jpg');
    expect(wrapper.find('img').prop('alt')).toEqual('avatar camargo');
  });
});
