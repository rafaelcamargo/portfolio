import React from 'react';
import { shallow } from 'enzyme';
import { RTopbar } from '@scripts/components/topbar/topbar';

describe('Topbar', () => {
  function mount(){
    return shallow(
      <RTopbar />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-topbar');
  });
});
