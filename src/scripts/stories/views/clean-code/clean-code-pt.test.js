import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RCleanCodePT } from './clean-code-pt';

describe('Bottles and Principles EN', () => {
  function mount(props = {}){
    return shallow(
      <RCleanCodePT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport)).toBeDefined();
  });
});
