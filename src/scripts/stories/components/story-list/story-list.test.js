import React from 'react';
import { shallow } from 'enzyme';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RStoryList } from '@scripts/stories/components/story-list/story-list';
import storiesMock from '@scripts/stories/mocks/stories';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Story List', () => {
  function mount(props = {}){
    return shallow(
      <RStoryList />
    );
  }

  beforeEach(() => {
    storiesService.get = jest.fn(() => storiesMock);
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-list');
  });

  it('should render some item', () => {
    const wrapper = mount();
    const story = wrapper.find('li').at(0);
    expect(story.find('h2').text()).toEqual('Title');
    expect(story.find('p').text()).toEqual('Description');
    expect(story.find('img').prop('src')).toEqual('assets/images/story.svg');
    expect(story.find('img').prop('alt')).toEqual('story illustration');
    expect(story.find(RCtaLink).prop('text')).toEqual('Read full story');
    expect(story.find(RCtaLink).prop('href')).toEqual('https://some.story.com');
  });
});
