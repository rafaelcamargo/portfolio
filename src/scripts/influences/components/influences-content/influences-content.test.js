import React from 'react';
import { shallow } from 'enzyme';
import { InfluencesContent } from '@scripts/influences/components/influences-content/influences-content';

describe('Influences Content', () => {
  function mount(){
    return shallow(<InfluencesContent />);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-influences-content');
  });
});
