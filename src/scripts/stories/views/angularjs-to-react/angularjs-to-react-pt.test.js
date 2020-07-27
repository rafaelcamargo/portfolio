import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { AngularJSToReactPT } from './angularjs-to-react-pt';

describe('AngularJS To React PT', () => {
  function mount(props = {}){
    return shallow(
      <AngularJSToReactPT />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
