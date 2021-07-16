import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '@scripts/base/components/icon/icon';

describe('Icon', () => {
  function mount(props = {}){
    return shallow(
      <Icon name={ props.name } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount({ name: 'rc' });
    expect(wrapper.prop('className')).toEqual('r-icon r-icon-rc');
  });

  it('should render a specific icon', () => {
    const wrapper = mount({ name: 'rc' });
    expect(wrapper.prop('style')).toEqual({
      maskImage: 'url("/assets/images/icon-rc.svg")',
      WebkitMaskImage: 'url("/assets/images/icon-rc.svg")'
    });
  });
});
