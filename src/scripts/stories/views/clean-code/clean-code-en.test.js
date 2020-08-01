import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { CleanCodeEN } from './clean-code-en';

describe('Clean Code EN', () => {
  function mount(props = {}){
    return shallow(
      <CleanCodeEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
