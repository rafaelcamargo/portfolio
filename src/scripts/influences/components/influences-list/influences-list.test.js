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

  it('should order influences accordingly', () => {
    const wrapper = mount();
    expect(wrapper.find('[data-title]').at(0).text()).toEqual('The Manual: A philosopher’s guide to life')
    expect(wrapper.find('[data-title]').at(10).text()).toEqual('Bauhaus 1919-1933')
  })
});
