import React from 'react';
import { shallow } from 'enzyme';
import { RHero } from '@scripts/base/components/hero/hero';
import { RViewport } from '@scripts/base/components/viewport/viewport';
import { RComponentMaturityModelEN } from './component-maturity-model-en';

describe('Component Maturity Model EN', () => {
  function mount(props = {}){
    return shallow(
      <RComponentMaturityModelEN>
        { props.content }
      </RComponentMaturityModelEN>
    );
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(RViewport).length).toEqual(1);
  });

  it('should contain a small hero', () => {
    const wrapper = mount();
    expect(wrapper.find(RHero).length).toEqual(1);
    expect(wrapper.find(RHero).prop('title')).toEqual('Component Maturity Model');
    expect(wrapper.find(RHero).prop('size')).toEqual('small');
  });
});
