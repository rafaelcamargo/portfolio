import React from 'react';
import { shallow } from 'enzyme';
import storiesMock from '@scripts/stories/mocks/stories';
import { RHero } from '@scripts/base/components/hero/hero';
import { RImage } from '@scripts/base/components/image/image';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { RStoryFooter } from '@scripts/stories/components/story-footer/story-footer';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import routeService from '@scripts/base/services/route/route';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Story Viewport', () => {
  function mount(props = {}){
    return shallow(
      <RStoryViewport storySummaryId={ props.storySummaryId }>
        { props.content }
      </RStoryViewport>
    );
  }

  beforeEach(() => {
    storiesService.findSummary = jest.fn(id => {
      return storiesMock.find(story => story.id === id);
    });
    routeService.getCurrentUrl = jest.fn(() => 'http://some.url.com');
  });

  it('should have appropriate css class', () => {
    const wrapper = mount({ storySummaryId: 1 });
    expect(wrapper.prop('className')).toEqual('r-story-viewport');
  });

  it('should build a viewport with story summary', () => {
    const wrapper = mount({ storySummaryId: 3 });
    expect(wrapper.find(RViewport).prop('title')).toEqual('Story Title 3');
    expect(wrapper.find(RViewport).prop('description')).toEqual('Story excerpt 3.');
    expect(wrapper.find(RViewport).prop('keywords')).toEqual('story, mock');
    expect(wrapper.find(RViewport).prop('image')).toEqual('thumbnail-512x512.png');
  });

  it('should build a hero with story summary title', () => {
    const wrapper = mount({ storySummaryId: 1 });
    expect(wrapper.find(RHero).prop('title')).toEqual('Título da História');
    expect(wrapper.find(RHero).prop('size')).toEqual('small');
  });

  it('should build an image', () => {
    const wrapper = mount({ storySummaryId: 3 });
    expect(wrapper.find(RImage).prop('filename')).toEqual('story-mock.svg');
    expect(wrapper.find(RImage).prop('alt')).toEqual('Story mock');
  });

  it('should transclude some content', () => {
    const content = <b>Hey</b>;
    const wrapper = mount({ storySummaryId: 1, content });
    expect(wrapper.find('b').text()).toEqual('Hey');
  });
});
