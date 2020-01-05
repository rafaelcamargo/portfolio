import React from 'react';
import { shallow } from 'enzyme';
import { RStorySummary } from '@scripts/stories/components/story-summary/story-summary';
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
    storiesService.getSummaries = jest.fn(() => storiesMock);
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-list');
  });

  it('should reverse items order', () => {
    const wrapper = mount();
    const summaryItems = wrapper.find(RStorySummary);
    const lastSummary = summaryItems.at(summaryItems.length - 1).prop('summary');
    expect(lastSummary.id).toEqual(1);
  });
});
