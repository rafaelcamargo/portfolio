import React from 'react';
import { shallow } from 'enzyme';
import analyticsService from '@scripts/base/services/analytics/analytics';
import routeService from '@scripts/base/services/route/route';
import { ExternalLink } from '@scripts/base/components/external-link/external-link';

describe('External Link', () => {
  function mount(props = {}){
    return shallow(
      <ExternalLink
        href={ props.href }
        trackName={ props.trackName }
        lang={ props.lang }>
        { props.children }
      </ExternalLink>
    );
  }

  beforeEach(() => {
    routeService.getCurrentUrl = jest.fn(() => 'https://internal.url.com');
    analyticsService.trackEvent = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-external-link');
  });

  it('should set anchor href property', () => {
    const href = 'http://url.com';
    const wrapper = mount({ href });
    expect(wrapper.find('a').prop('href')).toEqual(href);
  });

  it('should external link open in a new tab', () => {
    const wrapper = mount();
    expect(wrapper.find('a').prop('target')).toEqual('_blank');
  });

  it('should not render a language attribute by default', () => {
    const wrapper = mount();
    expect(wrapper.find('a').prop('lang')).not.toBeDefined();
  });

  it('should optionally render a language attribute', () => {
    const lang = 'en';
    const wrapper = mount({ lang });
    expect(wrapper.find('a').prop('lang')).toEqual(lang);
  });

  it('should track click event on external link click', () => {
    const text = 'Glorious Demo';
    const href = 'http://external.url.com';
    const wrapper = mount();
    wrapper.find('a').simulate('click', { target: { text, href } });
    expect(analyticsService.trackEvent).toHaveBeenCalledWith(
      'clicked external link',
      { linkText: text, linkHref: href, url: 'https://internal.url.com' }
    );
  });

  it('should optionally set a custom track name for click event', () => {
    const trackName = 'something happened';
    const wrapper = mount({ trackName });
    wrapper.find('a').simulate('click', { target: { text: 'Glorious Demo' } });
    expect(analyticsService.trackEvent.mock.calls[0][0]).toEqual(trackName);
  });
});
