import React from 'react';
import { mount } from 'enzyme';
import { RNewsletter } from '@scripts/base/components/newsletter/newsletter';
import analyticsService from '@scripts/base/services/analytics/analytics';

describe('Share', () => {
  function mountComponent(props = {}){
    return mount(
      <RNewsletter lang={ props.lang } />
    );
  }

  beforeEach(() => {
    analyticsService.trackEvent = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('div').prop('className')).toEqual('r-newsletter');
  });

  it('should show texts in english by default', () => {
    const ctaText = 'Don\'t miss a thing, subscribe to my newsletter!';
    const linkText = 'Subscribe';
    const wrapper = mountComponent();
    expect(wrapper.find('span').at(0).text().trim()).toEqual(ctaText);
    expect(wrapper.find('a').text().trim()).toEqual(linkText);
  });

  it('should optionally show texts in portuguese', () => {
    const ctaText = 'Não perca nenhuma nova publicação, assine a newsletter!';
    const linkText = 'Assinar';
    const wrapper = mountComponent({ lang: 'pt' });
    expect(wrapper.find('span').at(0).text().trim()).toEqual(ctaText);
    expect(wrapper.find('a').text().trim()).toEqual(linkText);
  });

  it('should newsletter link open in new tab', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('a').prop('target')).toEqual('_blank');
  });

  it('should track newsletter link click', () => {
    const wrapper = mountComponent();
    wrapper.find('a').simulate('click');
    expect(analyticsService.trackEvent).toHaveBeenCalledWith('newsletter link clicked');
  });
});
