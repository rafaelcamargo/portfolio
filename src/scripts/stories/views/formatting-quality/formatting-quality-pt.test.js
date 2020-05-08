import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RFormattingQualityPT } from './formatting-quality-pt';

describe('Formatting quality PT', () => {
  function mount(props = {}){
    return shallow(
      <RFormattingQualityPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport).prop('storySummaryId')).toEqual(11);
  });
});
