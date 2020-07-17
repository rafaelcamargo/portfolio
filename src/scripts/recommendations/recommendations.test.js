import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '@scripts/base/components/hero/hero';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { Recommendations } from '@scripts/recommendations/recommendations';

describe('Recommendations', () => {
  function mount(){
    return shallow(<Recommendations />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a small hero', () => {
    const wrapper = mount();
    expect(wrapper.find(Hero).length).toEqual(1);
    expect(wrapper.find(Hero).prop('title')).toEqual('Recommendations');
    expect(wrapper.find(Hero).prop('size')).toEqual('small');
  });
});
