import React from 'react';
import { shallow } from 'enzyme';
import { Topbar } from '@scripts/base/components/topbar/topbar';
import sidebarState from '@scripts/base/components/sidebar/sidebar.state';

describe('Topbar', () => {
  function mount({ hideMenu } = {}){
    return shallow(
      <Topbar hideMenu={hideMenu} />
    );
  }

  beforeEach(() => {
    sidebarState.toggle = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-topbar');
  });

  it('should toggle sidebar visibility on menu button click', () => {
    const wrapper = mount();
    wrapper.find('[data-menu-button]').simulate('click');
    expect(sidebarState.toggle).toHaveBeenCalled();
  });

  it('should optionally not render menu', () => {
    const wrapper = mount({ hideMenu: true });
    expect(wrapper.find('[data-menu]').length).toEqual(0);
    expect(wrapper.find('[data-menu-button]').length).toEqual(0);
  })
});
