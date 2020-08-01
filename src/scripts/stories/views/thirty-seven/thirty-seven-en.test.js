import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { ThirtySevenEN } from './thirty-seven-en';

describe('Thirty Seven EN', () => {
  function mount(props = {}){
    return shallow(
      <ThirtySevenEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
