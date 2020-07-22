import React from 'react';
import { shallow } from 'enzyme';
import { Menu } from '@scripts/base/components/menu/menu';

describe('Menu', () => {
  function mount(){
    return shallow(
      <Menu />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-menu');
  });

  it('should contain menu list', () => {
    const wrapper = mount();
    expect(wrapper.find('ul')).toBeDefined();
  });

  it('should contain menu items', () => {
    const wrapper = mount();
    expect(wrapper.find('li').length).toEqual(7);
  });
});
