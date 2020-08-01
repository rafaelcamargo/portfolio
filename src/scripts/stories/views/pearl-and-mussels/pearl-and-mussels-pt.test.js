import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { PearlAndMusselsPT } from './pearl-and-mussels-pt';

describe('Pearl And Mussels PT', () => {
  function mount(props = {}){
    return shallow(
      <PearlAndMusselsPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
