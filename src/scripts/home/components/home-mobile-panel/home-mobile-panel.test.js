import React from 'react';
import { shallow } from 'enzyme';
import { Mobile } from '@scripts/base/components/mobile/mobile';
import { HomeMobilePanel } from '@scripts/home/components/home-mobile-panel/home-mobile-panel';

describe('Home Mobile Panel', () => {
  function mount(props = {}){
    return shallow(
      <HomeMobilePanel />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-home-mobile-panel');
  });

  it('should contain a mobile for nashios', () => {
    const wrapper = mount();
    expect(wrapper.find(Mobile).at(0).prop('screenshot')).toEqual('pitsby.svg');
  });

  it('should contain a mobile for pitsby', () => {
    const wrapper = mount();
    expect(wrapper.find(Mobile).at(1).prop('screenshot')).toEqual('nashios.svg');
  });

  it('should make panel visible when all images have been loaded', () => {
    const visibilityCssClass = 'r-home-mobile-panel-visible';
    const wrapper = mount();
    const instance = wrapper.instance();
    instance.onScreenshotLoad();
    expect(wrapper.prop('className').includes(visibilityCssClass)).toEqual(false);
    instance.onScreenshotLoad();
    expect(wrapper.prop('className').includes(visibilityCssClass)).toEqual(true);
  });
});
