import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RPearlAndMusselsPT } from './pearl-and-mussels-pt';

describe('Pearl And Mussels PT', () => {
  function mount(props = {}){
    return shallow(
      <RPearlAndMusselsPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport)).toBeDefined();
  });
});
