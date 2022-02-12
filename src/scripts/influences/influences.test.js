import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '@scripts/base/components/hero/hero';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { InfluencesList } from '@scripts/influences/components/influences-list/influences-list';
import { Influences } from '@scripts/influences/influences';

describe('Influences', () => {
  function mount(){
    return shallow(<Influences />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a small hero', () => {
    const wrapper = mount();
    expect(wrapper.find(Hero).length).toEqual(1);
    expect(wrapper.find(Hero).prop('title')).toEqual('Influences');
    expect(wrapper.find(Hero).prop('size')).toEqual('small');
  });

  it('should contain influences list', () => {
    const wrapper = mount();
    expect(wrapper.find(InfluencesList).length).toEqual(1);
  })
});
