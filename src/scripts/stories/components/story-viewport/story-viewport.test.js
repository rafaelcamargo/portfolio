import React from 'react';
import { shallow } from 'enzyme';
import storiesMock from '@scripts/stories/mocks/stories';
import { Divider } from '@scripts/base/components/divider/divider';
import { Hero } from '@scripts/base/components/hero/hero';
import { Image } from '@scripts/base/components/image/image';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { StoryFooter } from '@scripts/stories/components/story-footer/story-footer';
import { StoryViewport } from '@scripts/stories/components/story-viewport/story-viewport';
import routeService from '@scripts/base/services/route/route';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Story Viewport', () => {
  function mount(props = {}){
    return shallow(
      <StoryViewport {...props}>
        { props.content }
      </StoryViewport>
    );
  }

  function mockUrlPath(path){
    routeService.getCurrentPathname = jest.fn(() => path);
  }

  beforeEach(() => {
    routeService.getCurrentUrl = jest.fn(() => 'http://some.url.com');
    storiesService.findSummaryByUrlPath = jest.fn(path => {
      return storiesMock.find(story => story.url.href === path);
    });
    mockUrlPath('/story-mock-3');
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-viewport');
  });

  it('should build a viewport with story summary', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).prop('title')).toEqual('Story Title 3');
    expect(wrapper.find(Viewport).prop('description')).toEqual('Story excerpt 3.');
    expect(wrapper.find(Viewport).prop('keywords')).toEqual('story, mock');
    expect(wrapper.find(Viewport).prop('image')).toEqual('thumbnail-512x512.png');
  });

  it('should build a hero with story summary title', () => {
    mockUrlPath('https://tableless.com.br/componentes-alem-do-reuso/');
    const wrapper = mount();
    expect(wrapper.find(Hero).prop('title')).toEqual('Story Title 2');
    expect(wrapper.find(Hero).prop('size')).toEqual('small');
  });

  it('should transclude some content', () => {
    mockUrlPath('/story-mock-3');
    const content = <b>Hey</b>;
    const wrapper = mount({ content });
    expect(wrapper.find('b').text()).toEqual('Hey');
  });

  it('should contain a story footer', () => {
    const wrapper = mount();
    expect(wrapper.find(StoryFooter).length).toEqual(1);
  });

  it('should optionally hide footer', () => {
    const wrapper = mount({ hideFooter: true });
    expect(wrapper.find(StoryFooter).length).toEqual(0);
  });
});
