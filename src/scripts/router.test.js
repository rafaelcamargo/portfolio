import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import History from '@scripts/base/components/history/history';
import { Contact } from '@scripts/contact/contact';
import { Experience } from '@scripts/experience/experience';
import { Hello } from '@scripts/hello/hello';
import { Home } from '@scripts/home/home';
import { Influences } from '@scripts/influences/influences';
import { Projects } from '@scripts/projects/projects';
import { Recommendations } from '@scripts/recommendations/recommendations';
import { Skills } from '@scripts/skills/skills';
import { Reads } from '@scripts/reads/reads';
import { Tools } from '@scripts/tools/tools';
import { AppRouter } from './router';

describe('App Router', () => {
  function mount(){
    return shallow(<AppRouter />);
  }

  function getRouteByIndex(wrapper, index){
    return wrapper.find(ScrollToTop).children().at(index);
  }

  it('should contain a Router', () => {
    const wrapper = mount();
    expect(wrapper.find(Router)).toBeDefined();
  });

  it('should contain a History', () => {
    const wrapper = mount();
    expect(wrapper.find(History)).toBeDefined();
  });

  it('should contain menu links', () => {
    const links = [
      { path: '/', component: Home },
      { path: '/contact', component: Contact },
      { path: '/experience', component: Experience },
      { path: '/hello', component: Hello },
      { path: '/projects', component: Projects },
      { path: '/recommendations', component: Recommendations },
      { path: '/skills', component: Skills },
      { path: '/influences', component: Influences },
      { path: '/reads', component: Reads },
      { path: '/tools', component: Tools }
    ];
    const wrapper = mount();
    links.forEach((link, index) => {
      const route = getRouteByIndex(wrapper, index);
      expect(route.prop('path')).toEqual(link.path);
      expect(route.prop('exact')).toEqual(true);
      expect(route.prop('component')).toEqual(link.component);
    });
  });
});
