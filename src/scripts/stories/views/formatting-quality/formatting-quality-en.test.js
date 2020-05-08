import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RFormattingQualityEN } from './formatting-quality-en';

describe('Formatting quality EN', () => {
  function mount(props = {}){
    return shallow(
      <RFormattingQualityEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport).prop('storySummaryId')).toEqual(10);
  });
});
