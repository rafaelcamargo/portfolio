import React from 'react';
import { shallow } from 'enzyme';
import { Hero } from '@scripts/base/components/hero/hero';
import { Section } from '@scripts/base/components/section/section';
import { Viewport } from '@scripts/base/components/viewport/viewport';
import { Contact } from '@scripts/contact/contact';

describe('Contact', () => {
  function mount(){
    return shallow(<Contact />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(Viewport).length).toEqual(1);
    expect(wrapper.find(Viewport).prop('topbarContainerSize')).toEqual('sm');
    expect(wrapper.find(Viewport).prop('hideMenu')).toBeDefined();
  });

  it('should contain a small hero', () => {
    const wrapper = mount();
    expect(wrapper.find(Hero).length).toEqual(1);
    expect(wrapper.find(Hero).prop('title')).toEqual('Contact');
    expect(wrapper.find(Hero).prop('size')).toEqual('small');
    expect(wrapper.find(Hero).prop('containerSize')).toEqual('sm');
  });

  it('should contain a section', () => {
    const wrapper = mount();
    expect(wrapper.find(Section).length).toEqual(1);
    expect(wrapper.find(Section).prop('containerSize')).toEqual('sm');
  });
});
