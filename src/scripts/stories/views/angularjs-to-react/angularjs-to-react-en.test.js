import React from 'react';
import { shallow } from 'enzyme';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import { AngularJSToReactEN } from './angularjs-to-react-en';

describe('AngularJS To React EN', () => {
  function mount(props = {}){
    return shallow(
      <AngularJSToReactEN />
    );
  }

  it('should contain a story viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryViewport)).toBeDefined();
  });
});
