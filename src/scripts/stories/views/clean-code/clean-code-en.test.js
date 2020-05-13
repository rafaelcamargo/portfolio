import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RCleanCodeEN } from './clean-code-en';

describe('Clean Code EN', () => {
  function mount(props = {}){
    return shallow(
      <RCleanCodeEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport)).toBeDefined();
  });
});
