import React from 'react';
import { shallow } from 'enzyme';
import { Credits } from '@scripts/base/components/credits/credits';

describe('Recommendation', () => {
  function mount(props = {}){
    return shallow(
      <Credits />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-credits');
  });
});
