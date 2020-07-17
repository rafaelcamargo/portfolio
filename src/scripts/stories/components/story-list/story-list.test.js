import React from 'react';
import { shallow } from 'enzyme';
import { RStorySummary } from '@scripts/stories/components/story-summary/story-summary';
import { RStoryList } from '@scripts/stories/components/story-list/story-list';
import storiesMock from '@scripts/stories/mocks/stories';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Story List', () => {
  function mount(props = {}){
    return shallow(
      <RStoryList featured={ props.featured } />
    );
  }

  function getItemsSummaryId(item){
    return item.prop('children').props.summary.id;
  }

  beforeEach(() => {
    storiesService.getPublicSummaries = jest.fn(() => storiesMock);
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-list');
  });

  it('should optionally list featured summaries only', () => {
    const wrapper = mount({ featured: true });
    const items = wrapper.find('li');
    expect(items.length).toEqual(1);
    expect(getItemsSummaryId(items.at(0))).toEqual(3);
  });

  it('should optionally list non featured summaries only', () => {
    const wrapper = mount({ featured: false });
    const items = wrapper.find('li');
    expect(items.length).toEqual(2);
    expect(getItemsSummaryId(items.at(0))).toEqual(2);
    expect(getItemsSummaryId(items.at(1))).toEqual(1);
  });
});
