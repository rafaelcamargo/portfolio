import React from 'react';
import { shallow } from 'enzyme';
import { RIcon } from '@scripts/base/components/icon/icon';

describe('Icon', () => {
  function mount(props = {}){
    return shallow(
      <RIcon name={ props.name } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount({ name: 'rc' });
    expect(wrapper.prop('className')).toEqual('r-icon r-icon-rc');
  });

  it('should render a specific icon', () => {
    const wrapper = mount({ name: 'rc' });
    expect(wrapper.prop('style')).toEqual({
      maskImage: 'url("images/icon-rc.svg")',
      WebkitMaskImage: 'url("images/icon-rc.svg")'
    });
  });
});
