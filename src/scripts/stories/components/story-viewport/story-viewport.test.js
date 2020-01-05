import React from 'react';
import { shallow } from 'enzyme';
import { RHero } from '@scripts/base/components/hero/hero';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Story Viewport', () => {
  function mockStorySummary(){
    return {
      1: {
        title: 'title',
        description: 'description',
        keywords: 'keywords'
      }
    }
  }

  function mount(props = {}){
    return shallow(
      <RStoryViewport storySummaryId={props.storySummaryId}>
        { props.content }
      </RStoryViewport>
    );
  }

  beforeEach(() => {
    storiesService.findSummary = jest.fn(id => (mockStorySummary()[id] || {}));
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-viewport');
  });

  it('should build a viewport with story summary', () => {
    const wrapper = mount({ storySummaryId: 1 });
    expect(wrapper.find(RViewport).prop('title')).toEqual('title');
    expect(wrapper.find(RViewport).prop('description')).toEqual('description');
    expect(wrapper.find(RViewport).prop('keywords')).toEqual('keywords');
    expect(wrapper.find(RViewport).prop('keywords')).toEqual('keywords');
  });

  it('should build a hero with story summary title', () => {
    const wrapper = mount({ storySummaryId: 1 });
    expect(wrapper.find(RHero).prop('title')).toEqual('title');
    expect(wrapper.find(RHero).prop('size')).toEqual('small');
  });

  it('should transclude some content', () => {
    const content = <b>Hey</b>;
    const wrapper = mount({ content });
    expect(wrapper.find('b').text()).toEqual('Hey');
  });
});
