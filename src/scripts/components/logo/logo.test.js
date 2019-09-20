import React from 'react';
import { shallow } from 'enzyme';
import { RLogo } from '@scripts/components/logo/logo';

describe('Logo', () => {
  function mount(){
    return shallow(
      <RLogo />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-logo');
  });
});
