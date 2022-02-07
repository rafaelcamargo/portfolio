import React from 'react';
import { shallow } from 'enzyme';
import { HomeHero } from '@scripts/home/components/home-hero/home-hero';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { BlogFeaturedList } from '@scripts/blog/components/blog-featured-list/blog-featured-list';
import { Home } from '@scripts/home/home';

describe('Home', () => {
  function mount(){
    return shallow(<Home />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should hide viewport menu', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).prop('hideMenu')).toEqual(true);
  });

  it('should contain a home hero', () => {
    const wrapper = mount();
    expect(wrapper.find(HomeHero).length).toEqual(1);
  });

  it('should contain a blog featured list', () => {
    const wrapper = mount();
    expect(wrapper.find(BlogFeaturedList).length).toEqual(1);
  });
});
