import React from 'react';
import { shallow } from 'enzyme';
import { RHero } from '@scripts/base/components/hero/hero';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { Home } from '@scripts/home/home';

describe('Home', () => {
  it('should contain a viewport', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(RViewport).length).toEqual(1);
  });

  it('should contain a hero', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(RHero).length).toEqual(1);
  });
});