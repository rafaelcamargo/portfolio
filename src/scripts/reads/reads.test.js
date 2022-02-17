import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '@scripts/base/components/hero/hero';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { ReadList } from '@scripts/reads/components/read-list/read-list';
import { Reads } from '@scripts/reads/reads';

describe('Reads', () => {
  function mount(){
    return shallow(<Reads />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a small hero', () => {
    const wrapper = mount();
    expect(wrapper.find(Hero).length).toEqual(1);
    expect(wrapper.find(Hero).prop('title')).toEqual('Reads');
    expect(wrapper.find(Hero).prop('size')).toEqual('small');
  });

  it('should contain read list', () => {
    const wrapper = mount();
    expect(wrapper.find(ReadList).length).toEqual(1);
  });
});
