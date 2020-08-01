import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { ThirtySevenPT } from './thirty-seven-pt';

describe('Thirty Seven PT', () => {
  function mount(props = {}){
    return shallow(
      <ThirtySevenPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
