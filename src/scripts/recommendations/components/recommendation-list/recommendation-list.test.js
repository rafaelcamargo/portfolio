import React from 'react';
import { shallow } from 'enzyme';
import { RecommendationList } from '@scripts/recommendations/components/recommendation-list/recommendation-list';

describe('Recommendation List', () => {
  function mount(props = {}){
    return shallow(
      <RecommendationList>
        <p>First</p>
        <p>Second</p>
      </RecommendationList>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-recommendation-list');
  });

  it('should render some items', () => {
    const wrapper = mount();
    const paragraphs = wrapper.find('p');
    expect(wrapper.find('ul li').length).toEqual(2);
    expect(paragraphs.at(0).text()).toEqual('First');
    expect(paragraphs.at(1).text()).toEqual('Second');
  });
});
