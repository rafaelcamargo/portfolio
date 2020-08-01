import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { DeveloperFirstPT } from './developer-first-pt';

describe('Developer First PT', () => {
  function mount(){
    return shallow(
      <DeveloperFirstPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
