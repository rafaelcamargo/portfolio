import React from 'react';
import { shallow } from 'enzyme';
import { RHero } from '@scripts/base/components/hero/hero';
import { RImage } from '@scripts/base/components/image/image';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { RShare } from '@scripts/base/components/share/share';
import { RStoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import routeService from '@scripts/base/services/route/route';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Story Viewport', () => {
  function mockStorySummary(){
    return {
      1: {
        image: {
          filename: 'components.svg',
          alt: 'components'
        },
        en: {
          title: 'title',
          description: 'description',
          keywords: 'keywords'
        }
      }
    }
  }

  function mount(props = {}){
    return shallow(
      <RStoryViewport
        storySummaryId={props.storySummaryId}
        primaryLanguage="en">
        { props.content }
      </RStoryViewport>
    );
  }

  beforeEach(() => {
    storiesService.findSummary = jest.fn(id => mockStorySummary()[id]);
    routeService.getCurrentUrl = jest.fn(() => 'http://some.url.com');
  });

  it('should have appropriate css class', () => {
    const wrapper = mount({ storySummaryId: 1 });
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

  it('should build an image', () => {
    const wrapper = mount({ storySummaryId: 1 });
    expect(wrapper.find(RImage).prop('filename')).toEqual('components.svg');
    expect(wrapper.find(RImage).prop('alt')).toEqual('components');
  });

  it('should contain a share component', () => {
    const wrapper = mount({ storySummaryId: 1 });
    const share = wrapper.find(RShare).at(0);
    expect(share.prop('message')).toEqual('title');
    expect(share.prop('url')).toEqual('http://some.url.com');
  });

  it('should transclude some content', () => {
    const content = <b>Hey</b>;
    const wrapper = mount({ storySummaryId: 1, content });
    expect(wrapper.find('b').text()).toEqual('Hey');
  });
});
