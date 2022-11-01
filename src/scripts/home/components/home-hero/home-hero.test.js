import React from 'react';
import { shallow } from 'enzyme';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { ProjectFeaturedList } from '@scripts/projects/components/project-featured-list/project-featured-list';
import { HomeHero } from '@scripts/home/components/home-hero/home-hero';

describe('Home Hero', () => {
  function mount(){
    return shallow(
      <HomeHero />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-home-hero');
  });

  it('should contain a project featured list', () => {
    const wrapper = mount();
    expect(wrapper.find(ProjectFeaturedList).length).toEqual(1);
  });

  it('should contain a cta link to projects', () => {
    const wrapper = mount();
    expect(wrapper.find(CtaLink).props()).toEqual({
      to: '/projects',
      text: 'View all projects'
    });
  });
});
