import React from 'react';
import { shallow } from 'enzyme';
import { RSidebar } from '@scripts/base/components/sidebar/sidebar';

describe('Sidebar', () => {
  function mount(){
    return shallow(
      <RSidebar />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-sidebar');
  });
});
