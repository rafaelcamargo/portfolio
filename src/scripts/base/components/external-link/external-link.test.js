import React from 'react';
import { shallow } from 'enzyme';
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
});
