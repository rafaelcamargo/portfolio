import React from 'react';
import { shallow } from 'enzyme';
import { RHomeHero } from '@scripts/home/components/home-hero/home-hero';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { Home } from '@scripts/home/home';

describe('Home', () => {
  function mount(){
    return shallow(<Home />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RViewport).length).toEqual(1);
  });

  it('should contain a home hero', () => {
    const wrapper = mount();
    expect(wrapper.find(RHomeHero).length).toEqual(1);
  });
});
