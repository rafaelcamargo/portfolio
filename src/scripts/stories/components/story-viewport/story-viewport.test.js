import React from 'react';
import { shallow } from 'enzyme';
import { RHero } from '@scripts/base/components/hero/hero';
import { RImage } from '@scripts/base/components/image/image';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { RStoryFooter } from '@scripts/stories/components/story-footer/story-footer';
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
        thumbnail: 'some-thumb.png',
        en: {
          title: 'title',
          description: 'description',
          keywords: 'keywords'
        },
        pt: {
          title: 'título',
          description: 'descrição',
          keywords: 'palavras-chave'
        }
      }
    }
  }

  function mount(props = {}){
    return shallow(
      <RStoryViewport
        storySummaryId={ props.storySummaryId }
        primaryLanguage={ props.primaryLanguage }>
        { props.content }
      </RStoryViewport>
    );
  }

  beforeEach(() => {
    storiesService.findSummary = jest.fn(id => mockStorySummary()[id]);
    routeService.getCurrentUrl = jest.fn(() => 'http://some.url.com');
  });

  it('should have appropriate css class', () => {
    const wrapper = mount({ storySummaryId: 1, primaryLanguage: 'en' });
    expect(wrapper.prop('className')).toEqual('r-story-viewport');
  });

  it('should build a viewport with story summary', () => {
    const wrapper = mount({ storySummaryId: 1, primaryLanguage: 'en' });
    expect(wrapper.find(RViewport).prop('title')).toEqual('title');
    expect(wrapper.find(RViewport).prop('description')).toEqual('description');
    expect(wrapper.find(RViewport).prop('keywords')).toEqual('keywords');
    expect(wrapper.find(RViewport).prop('image')).toEqual('some-thumb.png');
  });

  it('should pass lang to viewport', () => {
    const wrapper = mount({ storySummaryId: 1, primaryLanguage: 'en' });
    expect(wrapper.find(RViewport).prop('lang')).toEqual('en');
  });

  it('should build a hero with story summary title', () => {
    const wrapper = mount({ storySummaryId: 1, primaryLanguage: 'en' });
    expect(wrapper.find(RHero).prop('title')).toEqual('title');
    expect(wrapper.find(RHero).prop('size')).toEqual('small');
  });

  it('should build an image', () => {
    const wrapper = mount({ storySummaryId: 1, primaryLanguage: 'en' });
    expect(wrapper.find(RImage).prop('filename')).toEqual('components.svg');
    expect(wrapper.find(RImage).prop('alt')).toEqual('components');
  });

  it('should contain a story footer component', () => {
    const wrapper = mount({ storySummaryId: 1, primaryLanguage: 'pt' });
    const storyFooter = wrapper.find(RStoryFooter).at(0);
    expect(storyFooter.prop('shareMessage')).toEqual('título');
    expect(storyFooter.prop('shareUrl')).toEqual('http://some.url.com');
    expect(storyFooter.prop('lang')).toEqual('pt');
  });

  it('should transclude some content', () => {
    const content = <b>Hey</b>;
    const wrapper = mount({ storySummaryId: 1, primaryLanguage: 'en', content });
    expect(wrapper.find('b').text()).toEqual('Hey');
  });
});
