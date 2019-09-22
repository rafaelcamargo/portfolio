import React from 'react';
import { shallow } from 'enzyme';
import { RHero } from '@scripts/base/components/hero/hero';
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

  it('should contain a large hero', () => {
    const wrapper = mount();
    expect(wrapper.find(RHero).length).toEqual(1);
    expect(wrapper.find(RHero).prop('title')).toEqual('My name is Rafael. I am an expert in building UI components.');
    expect(wrapper.find(RHero).prop('size')).toEqual('large');
  });
});
