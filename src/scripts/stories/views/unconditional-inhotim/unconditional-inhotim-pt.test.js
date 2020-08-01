import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { UnconditionalInhotimPT } from './unconditional-inhotim-pt';

describe('Unconditional Inhotim PT', () => {
  function mount(props = {}){
    return shallow(
      <UnconditionalInhotimPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
