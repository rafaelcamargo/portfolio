import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RComponentMaturityModelEN } from './component-maturity-model-en';

describe('Component Maturity Model EN', () => {
  function mount(props = {}){
    return shallow(
      <RComponentMaturityModelEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport).prop('storySummaryId')).toEqual(5);
  });
});
