import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Footer } from '@scripts/base/components/footer/footer';
import { Icon } from '@scripts/base/components/icon/icon';

describe('Footer', () => {
  function mount({ showDivider } = {}){
    return shallow(
      <Footer showDivider={showDivider} />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-footer');
  });

  it('should contain a link to hello', () => {
    const wrapper = mount();
    expect(wrapper.find(Link).at(0).props()).toEqual({
      to: '/hello',
      children: 'Hello'
    });
  });

  it('should contain a link to skills', () => {
    const wrapper = mount();
    expect(wrapper.find(Link).at(1).props()).toEqual({
      to: '/skills',
      children: 'Skills'
    });
  });

  it('should contain a link to influences', () => {
    const wrapper = mount();
    expect(wrapper.find(Link).at(2).props()).toEqual({
      to: '/influences',
      children: 'Influences'
    });
  });

  it('should contain a link to contact', () => {
    const wrapper = mount();
    expect(wrapper.find(Link).at(3).props()).toEqual({
      to: '/contact',
      children: 'Contact'
    });
  });
});
