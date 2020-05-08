import React from 'react';
import { shallow } from 'enzyme';
import { RImage } from '@scripts/base/components/image/image';
import { RStorySummary } from '@scripts/stories/components/story-summary/story-summary';
import storiesMock from '@scripts/stories/mocks/stories';

describe('Story Summary List', () => {
  function mount(props = {}){
    return shallow(<RStorySummary summary={ props.summary } />);
  }

  function getStoryMock(){
    const [ mock ] = storiesMock;
    return Object.assign({}, mock);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount({ summary: getStoryMock() });
    expect(wrapper.prop('className')).toEqual('r-story-summary');
  });

  it('should set a language', () => {
    const wrapper = mount({ summary: getStoryMock() });
    expect(wrapper.prop('lang')).toEqual('en');
  });

  it('should build a title', () => {
    const wrapper = mount({ summary: getStoryMock() });
    expect(wrapper.find('[data-story-summary-title-link]').text()).toEqual('Story Title 3');
  });

  it('should title be a link', () => {
    const wrapper = mount({ summary: getStoryMock() });
    const link = wrapper.find('[data-story-summary-title-link]');
    expect(link.prop('href')).toEqual('/story-mock-3');
    expect(link.prop('target')).toEqual('_self');
  });

  it('should optionally pass a target to the title link', () => {
    const summary = getStoryMock();
    summary.url.target = '_blank';
    const wrapper = mount({ summary });
    const link = wrapper.find('[data-story-summary-title-link]');
    expect(link.prop('target')).toEqual('_blank');
  });

  it('should build an excerpt', () => {
    const wrapper = mount({ summary: getStoryMock() });
    expect(wrapper.find('p').text()).toEqual('Story excerpt 3.');
  });
});
