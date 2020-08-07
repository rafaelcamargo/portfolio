import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { CleanSetupEN } from './clean-setup-en';

describe('Clean Setup PT', () => {
  function mount(props = {}){
    return shallow(
      <CleanSetupEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
