import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RPearlAndMusselsEN } from './pearl-and-mussels-en';

describe('Pearl And Mussels EN', () => {
  function mount(props = {}){
    return shallow(
      <RPearlAndMusselsEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
