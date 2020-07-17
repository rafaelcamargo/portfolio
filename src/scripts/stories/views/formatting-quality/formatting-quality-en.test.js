import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { FormattingQualityEN } from './formatting-quality-en';

describe('Formatting quality EN', () => {
  function mount(props = {}){
    return shallow(
      <FormattingQualityEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
