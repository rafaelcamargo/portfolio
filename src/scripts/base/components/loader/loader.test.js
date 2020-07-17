import React from 'react';
import { shallow } from 'enzyme';
import { Loader } from '@scripts/base/components/loader/loader';

describe('Loader', () => {
  function mount(props = {}){
    return shallow(
      <Loader />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-loader');
  });
});
