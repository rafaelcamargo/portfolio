import React from 'react';
import { shallow } from 'enzyme';
import { RStorySummary } from '@scripts/stories/components/story-summary/story-summary';
import { RStoryList } from '@scripts/stories/components/story-list/story-list';
import storiesMock from '@scripts/stories/mocks/stories';
import storiesService from '@scripts/stories/services/stories/stories';

describe('Story List', () => {
  function mount(props = {}){
    return shallow(
      <RStoryList
        summaryIds={ props.summaryIds }
        primaryLanguage={ props.primaryLanguage }
        secondaryLanguage={ props.secondaryLanguage } />
    );
  }

  beforeEach(() => {
    storiesService.getSummaries = jest.fn(() => storiesMock);
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-list');
  });

  it('should accept a primary language as prop', () => {
    const wrapper = mount({ primaryLanguage: 'pt' });
    const summaryItems = wrapper.find(RStorySummary);
    expect(summaryItems.at(0).prop('primaryLanguage')).toEqual('pt');
  });

  it('should accept a secondary language as prop', () => {
    const wrapper = mount({ secondaryLanguage: 'en' });
    const summaryItems = wrapper.find(RStorySummary);
    expect(summaryItems.at(0).prop('secondaryLanguage')).toEqual('en');
  });

  it('should reverse items order', () => {
    const wrapper = mount();
    const summaryItems = wrapper.find(RStorySummary);
    const lastSummary = summaryItems.at(summaryItems.length - 1).prop('summary');
    expect(lastSummary.id).toEqual(1);
  });

  it('should optionally filter summaries', () => {
    const wrapper = mount({ summaryIds: [1,3] });
    const summaryItems = wrapper.find(RStorySummary);
    expect(summaryItems.length).toEqual(2);
    expect(summaryItems.at(0).prop('summary').id).toEqual(3);
    expect(summaryItems.at(1).prop('summary').id).toEqual(1);
  });
});
