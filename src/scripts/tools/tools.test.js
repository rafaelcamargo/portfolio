import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '@scripts/base/components/hero/hero';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { ToolList } from '@scripts/tools/components/tool-list/tool-list';
import { Tools } from '@scripts/tools/tools';

describe('Tools', () => {
  function mount(){
    return shallow(<Tools />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
  });

  it('should contain a small hero', () => {
    const wrapper = mount();
    expect(wrapper.find(Hero).length).toEqual(1);
    expect(wrapper.find(Hero).prop('title')).toEqual('Tools');
    expect(wrapper.find(Hero).prop('size')).toEqual('small');
  });

  it('should contain tool list', () => {
    const wrapper = mount();
    expect(wrapper.find(ToolList).length).toEqual(1);
  });
});
