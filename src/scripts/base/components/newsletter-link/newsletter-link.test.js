import React from 'react';
import { shallow } from 'enzyme';
import { RHeroLink } from '@scripts/base/components/hero-link/hero-link';
import { RNewsletterLink } from '@scripts/base/components/newsletter-link/newsletter-link';
import analyticsService from '@scripts/base/services/analytics/analytics';

describe('Newsletter Link', () => {
  function mount(props = {}){
    return shallow(
      <RNewsletterLink text={ props.text } />
    );
  }

  beforeEach(() => {
    analyticsService.trackEvent = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-newsletter-hero-link');
  });

  it('should show text', () => {
    const text = 'Subscribe';
    const wrapper = mount({ text });
    expect(wrapper.find(RHeroLink).prop('text')).toEqual(text);
  });

  it('should track newsletter link click', () => {
    const wrapper = mount();
    wrapper.find(RHeroLink).simulate('click');
    expect(analyticsService.trackEvent).toHaveBeenCalledWith('newsletter link clicked');
  });
});
