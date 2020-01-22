import React from 'react';
import { shallow } from 'enzyme';
import { RNewsletterLink } from '@scripts/base/components/newsletter-link/newsletter-link';
import { RNewsletterBar } from '@scripts/base/components/newsletter-bar/newsletter-bar';

describe('Newsletter Bar', () => {
  function mount(props = {}){
    return shallow(<RNewsletterBar />);
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.find('div').prop('className')).toEqual('r-newsletter-bar');
  });

  it('should contain a newsletter hero link', () => {
    const wrapper = mount();
    expect(wrapper.find(RNewsletterLink).prop('text')).toEqual('Subscribe');
  });
});
