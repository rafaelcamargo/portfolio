import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { AppRouter } from './router';
import { Experience } from '@scripts/experience/experience';
import { Home } from '@scripts/home/home';
import { Skills } from '@scripts/skills/skills';

describe('Home', () => {
  function mount(){
    return shallow(<AppRouter />);
  }

  it('should contain a Router', () => {
    const wrapper = mount();
    expect(wrapper.find(Router)).toBeDefined();
  });

  it('should contain Home route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(0);
    expect(route.prop('path')).toEqual('/');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Home);
  });

  it('should contain Experience route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(1);
    expect(route.prop('path')).toEqual('/experience');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Experience);
  });

  it('should contain Skills route', () => {
    const wrapper = mount();
    const route = wrapper.find(ScrollToTop).children().at(2);
    expect(route.prop('path')).toEqual('/skills');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Skills);
  });
});
