import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { CleanSetupPT } from './clean-setup-pt';

describe('Clean Setup PT', () => {
  function mount(props = {}){
    return shallow(
      <CleanSetupPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
