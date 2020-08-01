import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
// import { ComponentMaturityModelEN } from './component-maturity-model-en';
import { ComponentMaturityModelEN } from '@scripts/stories/views/component-maturity-model/component-maturity-model-en';

describe('Component Maturity Model EN', () => {
  function mount(props = {}){
    return shallow(
      <ComponentMaturityModelEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
