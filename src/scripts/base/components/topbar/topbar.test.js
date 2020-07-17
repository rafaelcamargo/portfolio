import React from 'react';
import { shallow } from 'enzyme';
import { Topbar } from '@scripts/base/components/topbar/topbar';
import sidebarState from '@scripts/base/components/sidebar/sidebar.state';

describe('Topbar', () => {
  function mount(){
    return shallow(
      <Topbar />
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
});
