import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '@scripts/base/components/hero/hero';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { Stories } from '@scripts/stories/stories';

describe('Stories', () => {
  function mount(){
    return shallow(<Stories />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a small hero', () => {
    const wrapper = mount();
    expect(wrapper.find(Hero).length).toEqual(1);
    expect(wrapper.find(Hero).prop('title')).toEqual('Stories');
    expect(wrapper.find(Hero).prop('size')).toEqual('small');
  });
});
