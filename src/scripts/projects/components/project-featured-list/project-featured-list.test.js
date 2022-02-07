import React from 'react';
import { shallow } from 'enzyme';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';
import { ProjectFeaturedList } from '@scripts/projects/components/project-featured-list/project-featured-list';
import projects from '@scripts/projects/data/featured-projects.json';

describe('Project Featured List', () => {
  function mount(props = {}){
    return shallow(<ProjectFeaturedList />);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-project-featured-list');
  });

  it('should list three projects', () => {
    const wrapper = mount();
    const items = wrapper.find('li');
    expect(items.length).toEqual(3);
    items.forEach((item, index) => {
      const { days_invested, description } = projects[index];
      expect(item.find('h2').text()).toEqual(`In ${days_invested} days`);
      expect(item.find('p').text()).toEqual(description);
    })
  });
});
