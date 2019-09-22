import React from 'react';
import { shallow } from 'enzyme';
import { RHero } from '@scripts/base/components/hero/hero';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { Skills } from '@scripts/skills/skills';

describe('Skills', () => {
  function mount(){
    return shallow(<Skills />);
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RViewport).length).toEqual(1);
  });

  it('should contain a small hero', () => {
    const wrapper = mount();
    expect(wrapper.find(RHero).length).toEqual(1);
    expect(wrapper.find(RHero).prop('title')).toEqual('Skills');
    expect(wrapper.find(RHero).prop('size')).toEqual('small');
  });
});
