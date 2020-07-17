import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { FormattingQualityPT } from './formatting-quality-pt';

describe('Formatting quality PT', () => {
  function mount(props = {}){
    return shallow(
      <FormattingQualityPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
