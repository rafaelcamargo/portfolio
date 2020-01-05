import React from 'react';
import { shallow } from 'enzyme';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { RComponentMaturityModelPT } from './component-maturity-model-pt';

describe('Component Maturity Model PT', () => {
  function mount(props = {}){
    return shallow(
      <RComponentMaturityModelPT>
        { props.content }
      </RComponentMaturityModelPT>
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RStoryViewport).prop('storySummaryId')).toEqual(5);
  });
});
