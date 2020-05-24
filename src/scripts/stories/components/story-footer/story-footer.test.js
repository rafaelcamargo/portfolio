import React from 'react';
import { shallow } from 'enzyme';
import { RPitsbyPromo } from '@scripts/base/components/pitsby-promo/pitsby-promo';
import { RStoryFooter } from './story-footer';

describe('Story Footer', () => {
  function mount(){
    return shallow(
      <RStoryFooter />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-footer');
  });

  it('should contain Pitsby promo component', () => {
    const wrapper = mount();
    expect(wrapper.find(RPitsbyPromo).length).toEqual(1);
  });
});
