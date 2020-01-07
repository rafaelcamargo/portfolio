import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RBottlesAndPrinciplesEN } from './bottles-and-principles-en';

describe('Bottles and Principles EN', () => {
  function mount(props = {}){
    return shallow(
      <RBottlesAndPrinciplesEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport).prop('storySummaryId')).toEqual(6);
  });
});
