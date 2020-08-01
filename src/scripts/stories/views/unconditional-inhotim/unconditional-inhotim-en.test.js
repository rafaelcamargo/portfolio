import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { UnconditionalInhotimEN } from './unconditional-inhotim-en';

describe('Unconditional Inhotim EN', () => {
  function mount(props = {}){
    return shallow(
      <UnconditionalInhotimEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
