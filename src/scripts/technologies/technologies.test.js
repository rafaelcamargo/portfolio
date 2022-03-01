import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '@scripts/base/components/hero/hero';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { TechnologyList } from '@scripts/technologies/components/technology-list/technology-list';
import { Technologies } from '@scripts/technologies/technologies';

describe('Technologies', () => {
  function mount(){
    return shallow(<Technologies />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a small hero', () => {
    const wrapper = mount();
    expect(wrapper.find(Hero).length).toEqual(1);
    expect(wrapper.find(Hero).prop('title')).toEqual('Technologies');
    expect(wrapper.find(Hero).prop('size')).toEqual('small');
  });

  it('should contain technology list', () => {
    const wrapper = mount();
    expect(wrapper.find(TechnologyList).length).toEqual(1);
  });
});
