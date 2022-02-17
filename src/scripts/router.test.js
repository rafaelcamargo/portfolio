import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import History from '@scripts/base/components/history/history';
import { Contact } from '@scripts/contact/contact';
import { Experience } from '@scripts/experience/experience';
import { Home } from '@scripts/home/home';
import { Influences } from '@scripts/influences/influences';
import { Projects } from '@scripts/projects/projects';
import { Recommendations } from '@scripts/recommendations/recommendations';
import { Skills } from '@scripts/skills/skills';
import { Reads } from '@scripts/reads/reads';
import { AppRouter } from './router';

describe('App Router', () => {
  function mount(){
    return shallow(<AppRouter />);
  }

  it('should contain a Router', () => {
    const wrapper = mount();
    expect(wrapper.find(Router)).toBeDefined();
  });

  it('should contain a History', () => {
    const wrapper = mount();
    expect(wrapper.find(History)).toBeDefined();
  });

  it('should contain Home route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(0);
    expect(route.prop('path')).toEqual('/');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Home);
  });

  it('should contain Contact route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(1);
    expect(route.prop('path')).toEqual('/contact');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Contact);
  });

  it('should contain Experience route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(2);
    expect(route.prop('path')).toEqual('/experience');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Experience);
  });

  it('should contain Influences route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(3);
    expect(route.prop('path')).toEqual('/influences');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Influences);
  });

  it('should contain Projects route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(4);
    expect(route.prop('path')).toEqual('/projects');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Projects);
  });

  it('should contain Recommendations route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(5);
    expect(route.prop('path')).toEqual('/recommendations');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Recommendations);
  });

  it('should contain Skills route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(6);
    expect(route.prop('path')).toEqual('/skills');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Skills);
  });

  it('should contain Reads route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(7);
    expect(route.prop('path')).toEqual('/reads');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Reads);
  });
});
