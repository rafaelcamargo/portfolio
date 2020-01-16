import React from 'react';
import { shallow } from 'enzyme';
import { RRelatedStories } from '@scripts/stories/components/related-stories/related-stories';
import { RStoryList } from '@scripts/stories/components/story-list/story-list';

describe('Related Stories', () => {
  function mount(props = {}){
    return shallow(
      <RRelatedStories
        summaryIds={ props.summaryIds }
        primaryLanguage={ props.primaryLanguage }
        secondaryLanguage={ props.secondaryLanguage } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-related-stories');
  });

  it('should contain an english title when primary language is english', () => {
    const wrapper = mount({ primaryLanguage: 'en' });
    expect(wrapper.find('[data-related-stories-title]').text()).toEqual('Related Stories');
  });

  it('should contain a portugues title when primary language is portugues', () => {
    const wrapper = mount({ primaryLanguage: 'pt' });
    expect(wrapper.find('[data-related-stories-title]').text()).toEqual('Leia Também');
  });

  it('should contain a story list', () => {
    const summaryIds = [3,4];
    const primaryLanguage = 'pt';
    const secondaryLanguage = 'en';
    const wrapper = mount({ summaryIds, primaryLanguage, secondaryLanguage });
    const storyList = wrapper.find(RStoryList);
    expect(storyList.prop('summaryIds')).toEqual(summaryIds);
    expect(storyList.prop('primaryLanguage')).toEqual(primaryLanguage);
    expect(storyList.prop('secondaryLanguage')).toEqual(secondaryLanguage);
  });
});
