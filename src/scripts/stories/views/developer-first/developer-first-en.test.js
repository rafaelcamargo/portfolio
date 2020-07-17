import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RDeveloperFirstEN } from './developer-first-en';

describe('Developer First EN', () => {
  function mount(){
    return shallow(
      <RDeveloperFirstEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
