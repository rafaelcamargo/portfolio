import React from 'react';
import { mount } from 'enzyme';
import { RNewsletterLink } from '@scripts/base/components/newsletter-link/newsletter-link';
import { RNewsletter } from '@scripts/base/components/newsletter/newsletter';

describe('Newsletter', () => {
  function mountComponent(props = {}){
    return mount(
      <RNewsletter lang={ props.lang } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mountComponent();
    expect(wrapper.find('div').prop('className')).toEqual('r-newsletter');
  });

  it('should show texts in english by default', () => {
    const ctaText = 'Don\'t miss a thing, subscribe to my newsletter!';
    const linkText = 'Subscribe';
    const wrapper = mountComponent();
    expect(wrapper.find('span').at(0).text().trim()).toEqual(ctaText);
    expect(wrapper.find(RNewsletterLink).prop('text')).toEqual(linkText);
  });

  it('should optionally show texts in portuguese', () => {
    const ctaText = 'Não perca nenhuma nova publicação, assine a newsletter!';
    const linkText = 'Assinar';
    const wrapper = mountComponent({ lang: 'pt' });
    expect(wrapper.find('span').at(0).text().trim()).toEqual(ctaText);
    expect(wrapper.find(RNewsletterLink).prop('text')).toEqual(linkText);
  });
});
