import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RCleanCodePT } from './clean-code-pt';

describe('Clean Code PT', () => {
  function mount(props = {}){
    return shallow(
      <RCleanCodePT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
