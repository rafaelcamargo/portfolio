import React from 'react';
import { shallow } from 'enzyme';
import { RNewsletter } from '@scripts/base/components/newsletter/newsletter';
import analyticsService from '@scripts/base/services/analytics/analytics';

describe('Share', () => {
  function mount(props = {}){
    return shallow(
      <RNewsletter lang={ props.lang } />
    );
  }

  beforeEach(() => {
    analyticsService.trackEvent = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-newsletter');
  });

  it('should show texts in english by default', () => {
    const ctaText = 'Don\'t miss a thing, subscribe to my newsletter!';
    const linkText = 'Subscribe';
    const wrapper = mount();
    expect(wrapper.find('span').text().trim()).toEqual(ctaText);
    expect(wrapper.find('a').text().trim()).toEqual(linkText);
  });

  it('should optionally show texts in portugues', () => {
    const ctaText = 'Não perca nenhuma nova publicação, assine a newsletter!';
    const linkText = 'Assinar';
    const wrapper = mount({ lang: 'pt' });
    expect(wrapper.find('span').text().trim()).toEqual(ctaText);
    expect(wrapper.find('a').text().trim()).toEqual(linkText);
  });

  it('should newsletter link open in new tab', () => {
    const wrapper = mount();
    expect(wrapper.find('a').prop('target')).toEqual('_blank');
  });

  it('should track newsletter link click', () => {
    const wrapper = mount();
    wrapper.find('a').simulate('click');
    expect(analyticsService.trackEvent).toHaveBeenCalledWith('newsletter link clicked');
  });
});
