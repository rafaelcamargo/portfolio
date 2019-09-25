import React from 'react';
import { shallow } from 'enzyme';
import { RIcon } from '@scripts/base/components/icon/icon';
import { RMobile } from '@scripts/base/components/mobile/mobile';

describe('Mobile', () => {
  function mount(props = {}){
    return shallow(
      <RMobile
        screenshot={ props.screenshot }
        scale={ props.scale }
        onScreenshotLoad={ props.onScreenshotLoad } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-mobile');
  });

  it('should contain a network icon', () => {
    const wrapper = mount();
    expect(wrapper.find(RIcon).at(0).prop('name')).toEqual('network');
  });

  it('should contain a wifi icon', () => {
    const wrapper = mount();
    expect(wrapper.find(RIcon).at(1).prop('name')).toEqual('wifi');
  });

  it('should contain a battery icon', () => {
    const wrapper = mount();
    expect(wrapper.find(RIcon).at(2).prop('name')).toEqual('battery');
  });

  it('should not show an image by default', () => {
    const wrapper = mount();
    expect(wrapper.find('img').length).toEqual(0);
  });

  it('should show an image if image has been provided', () => {
    const wrapper = mount({ screenshot: 'pitsby.svg' });
    expect(wrapper.find('img').prop('src')).toEqual('images/screenshot-pitsby.svg');
    expect(wrapper.find('img').prop('alt')).toEqual('screenshot pitsby');
  });

  it('should add screenshot name as class name', () => {
    const wrapper = mount({ screenshot: 'pitsby.svg' });
    expect(wrapper.prop('className').includes('r-mobile-pitsby')).toEqual(true);
  });

  it('should not be scaled by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('style')).toEqual({});
  });

  it('should optionally be scaled', () => {
    const wrapper = mount({ scale: '.5' });
    expect(wrapper.prop('style')).toEqual({ transform: 'scale(.5)' });
  });

  it('should not execute screenshot load callback if no callback has been given', () => {
    const onScreenshotLoad = jest.fn();
    const wrapper = mount();
    wrapper.instance().onScreenshotLoad();
    expect(onScreenshotLoad).not.toHaveBeenCalled();
  });

  it('should execute screenshot load callback if callback has been given', () => {
    const onScreenshotLoad = jest.fn();
    const wrapper = mount({ onScreenshotLoad });
    wrapper.instance().onScreenshotLoad();
    expect(onScreenshotLoad).toHaveBeenCalled();
  });
});
