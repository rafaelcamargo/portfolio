import React from 'react';
import { shallow } from 'enzyme';
import { RFeatureList } from '@scripts/base/components/feature-list/feature-list';

describe('Feature List', () => {
  function mount(props = {}){
    return shallow(
      <RFeatureList itemSize={ props.itemSize }>
        <p>First</p>
        <p>Second</p>
      </RFeatureList>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-feature-list');
  });

  it('should render some items', () => {
    const wrapper = mount();
    const paragraphs = wrapper.find('p');
    expect(wrapper.find('ul li').length).toEqual(2);
    expect(paragraphs.at(0).text()).toEqual('First');
    expect(paragraphs.at(1).text()).toEqual('Second');
  });

  it('should size an item as full container size by default', () => {
    const wrapper = mount();
    expect(wrapper.find('li').at(0).prop('className').includes('r-feature-list-item-size-1-1')).toEqual(true);
  });

  it('should optionally size an item as half of container size', () => {
    const wrapper = mount({ itemSize: '1-2' });
    expect(wrapper.find('li').at(0).prop('className').includes('r-feature-list-item-size-1-2')).toEqual(true);
  });

  it('should optionally size an item as one third of container size', () => {
    const wrapper = mount({ itemSize: '1-3' });
    expect(wrapper.find('li').at(0).prop('className').includes('r-feature-list-item-size-1-3')).toEqual(true);
  });
});
