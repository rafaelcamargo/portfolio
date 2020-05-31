import React from 'react';
import { shallow } from 'enzyme';
import storiesService from '@scripts/stories/services/stories/stories';
import { RStoryRelations } from './story-relations';

describe('Story Relations', () => {
  function mount(props = {}){
    return shallow(
      <RStoryRelations ids={ props.ids } lang={ props.lang } />
    );
  }

  function mockStoryRelations(){
    const stories = [
      { id: 'a', title: 'A', url: { href: 'www.some.com' } },
      { id: 'b', title: 'B', url: { href: 'www.mock.com' } },
      { id: 'c', title: 'C', url: { href: 'www.stories.com' } }
    ];
    storiesService.filterByIds = jest.fn(ids => {
      return stories.filter(story => ids.includes(story.id));
    });
  }

  beforeEach(() => {
    mockStoryRelations();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-relations');
  });

  it('should not render a paragraph if no ids have been given', () => {
    const wrapper = mount();
    expect(wrapper.find('p').length).toEqual(0);
  });

  it('should use english texts by default', () => {
    const text = 'If you like this story, you\'ll probably like reading:';
    const wrapper = mount({ ids: ['a'] });
    expect(wrapper.find('p').text().includes(text)).toEqual(true);
  });

  it('should optionally use portuguese texts', () => {
    const text = 'Se você curtiu esse texto, provavelmente vai curtir:';
    const wrapper = mount({ ids: ['a'], lang: 'pt' });
    expect(wrapper.find('p').text().includes(text)).toEqual(true);
  });

  it('should render links for every relation', () => {
    const wrapper = mount({ ids: ['a', 'c'] });
    const links = wrapper.find('a');
    expect(wrapper.find('a').at(0).prop('href')).toEqual('www.some.com');
    expect(wrapper.find('a').at(0).prop('children')).toEqual('A');
    expect(wrapper.find('a').at(1).prop('href')).toEqual('www.stories.com');
    expect(wrapper.find('a').at(1).prop('children')).toEqual('C');
  });
});
