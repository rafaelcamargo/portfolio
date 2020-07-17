import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '@scripts/base/components/hero/hero';
import { RHomeMobilePanel } from '@scripts/home/components/home-mobile-panel/home-mobile-panel';
import { RHomeHero } from '@scripts/home/components/home-hero/home-hero';

describe('Home Hero', () => {
  function mount(props = {}){
    return shallow(
      <RHomeHero />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-home-hero');
  });

  it('should contain a large hero', () => {
    const wrapper = mount();
    expect(wrapper.find(Hero).prop('size')).toEqual('large');
  });

  it('should render a title', () => {
    const title = 'My name is Rafael.I am an expert in building UI components.'
    const wrapper = mount();
    expect(wrapper.find('h1').text()).toEqual(title);
  });
});
