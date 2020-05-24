import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RThirtySevenEN } from './thirty-seven-en';

describe('Thirty Seven EN', () => {
  function mount(props = {}){
    return shallow(
      <RThirtySevenEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport)).toBeDefined();
  });
});
