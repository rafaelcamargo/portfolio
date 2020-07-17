import React from 'react';
import { shallow } from 'enzyme';
import { Image } from '@scripts/base/components/image/image';

describe('Image', () => {
  function mount(props = {}){
    return shallow(
      <Image filename={ props.filename } alt={ props.alt }/>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-image');
  });

  it('should build image source', () => {
    const wrapper = mount({ filename: 'components.svg' });
    expect(wrapper.prop('src')).toEqual('assets/images/components.svg');
  });

  it('should build image alternate text', () => {
    const alt = 'components';
    const wrapper = mount({ alt });
    expect(wrapper.prop('alt')).toEqual(alt);
  });
});
