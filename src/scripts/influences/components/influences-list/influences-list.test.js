import React from 'react';
import { shallow } from 'enzyme';
import { InfluencesList } from '@scripts/influences/components/influences-list/influences-list';

describe('Influences List', () => {
  function mount(){
    return shallow(<InfluencesList />);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-influences-list');
  });
});
