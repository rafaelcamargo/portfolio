import React from 'react';
import { shallow } from 'enzyme';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RContactMailCtaLink } from '@scripts/contact/components/contact-mail-cta-link/contact-mail-cta-link';
import analyticsService from '@scripts/base/services/analytics/analytics';

describe('Contact Mail Cta Link', () => {
  function mount(){
    return shallow(
      <RContactMailCtaLink />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-contact-mail-cta-link');
  });

  it('should track cta link click', () => {
    analyticsService.trackEvent = jest.fn();
    const wrapper = mount();
    wrapper.find(RCtaLink).simulate('click');
    expect(analyticsService.trackEvent).toHaveBeenCalledWith('contact mail cta link clicked');
  });
});
