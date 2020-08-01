import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { ComponentMaturityModelPT } from './component-maturity-model-pt';

describe('Component Maturity Model PT', () => {
  function mount(props = {}){
    return shallow(
      <ComponentMaturityModelPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
