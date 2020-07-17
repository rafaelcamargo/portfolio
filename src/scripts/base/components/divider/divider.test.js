import React from 'react';
import { shallow } from 'enzyme';
import { Divider } from '@scripts/base/components/divider/divider';

describe('Divider', () => {
  function mount(props = {}){
    return shallow(
      <Divider />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-divider');
  });
});
