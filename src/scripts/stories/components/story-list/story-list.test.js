import React from 'react';
import { shallow } from 'enzyme';
import { RStorySummary } from '@scripts/stories/components/story-summary/story-summary';
import { RStoryList } from '@scripts/stories/components/story-list/story-list';
import storiesMock from '@scripts/stories/mocks/stories';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Story List', () => {
  function mount(props = {}){
    return shallow(
      <RStoryList summaryIds={ props.summaryIds } />
    );
  }

  beforeEach(() => {
    storiesService.getSummaries = jest.fn(() => storiesMock);
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-list');
  });

  it('should optionally filter summaries', () => {
    const wrapper = mount({ summaryIds: [1,3] });
    const summaryItems = wrapper.find(RStorySummary);
    expect(summaryItems.length).toEqual(2);
    expect(summaryItems.at(0).prop('summary').id).toEqual(3);
    expect(summaryItems.at(1).prop('summary').id).toEqual(1);
  });
});
