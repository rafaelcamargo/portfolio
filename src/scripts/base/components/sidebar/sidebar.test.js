import React from 'react';
import { shallow } from 'enzyme';
import { RSidebar } from '@scripts/base/components/sidebar/sidebar';
import sidebarState from '@scripts/base/components/sidebar/sidebar.state';

describe('Sidebar', () => {
  function mount(){
    return shallow(
      <RSidebar />
    );
  }

  beforeEach(() => {
    sidebarState.reset();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-sidebar');
  });

  it('should show sidebar on sidebar toggle', () => {
    const wrapper = mount();
    sidebarState.toggle();
    expect(wrapper.prop('className').includes('r-sidebar-visible')).toEqual(true);
  });

  it('should hide sibebar on close sidebar button click', () => {
    const wrapper = mount();
    sidebarState.toggle();
    expect(wrapper.prop('className').includes('r-sidebar-visible')).toEqual(true);
    wrapper.find('[data-hide-sidebar-button]').simulate('click');
    expect(wrapper.prop('className').includes('r-sidebar-visible')).toEqual(false);
  });

  it('should unsubscribe from sidebar state before unmount', () => {
    const wrapper = mount();
    const instance = wrapper.instance();
    spyOn(instance, 'unsubscribeSidebarState');
    wrapper.unmount();
    expect(instance.unsubscribeSidebarState).toHaveBeenCalled();
  })
});
