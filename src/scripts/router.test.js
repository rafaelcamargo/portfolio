import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from '@scripts/views/home/home';
import { AppRouter } from './router';

describe('Home', () => {
  it('should contain a Router', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper.find(Router)).toBeDefined();
  });

  it('should contain Home route', () => {
    const wrapper = shallow(<AppRouter />);
    const route = wrapper.find(Router).children().at(0);
    expect(route.prop('path')).toEqual('/');
    expect(route.prop('exact')).toEqual(true);
    expect(route.prop('component')).toEqual(Home);
  });
});
