import React from 'react';
import { shallow } from 'enzyme';
import { RDivider } from '@scripts/base/components/divider/divider';
import { RNewsletter } from '@scripts/base/components/newsletter/newsletter';
import { RShare } from '@scripts/base/components/share/share';
import { RStoryFooter } from './story-footer';

describe('Bottles and Principles EN', () => {
  function mount(props = {}){
    return shallow(
      <RStoryFooter
        shareMessage={ props.shareMessage }
        shareUrl={ props.shareUrl }
        lang={ props.lang } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-story-footer');
  });

  it('should accept a language', () => {
    const lang = 'pt';
    const wrapper = mount({ lang });
    expect(wrapper.find(RNewsletter).prop('lang')).toEqual(lang);
    expect(wrapper.find(RShare).prop('lang')).toEqual(lang);
  });

  it('should accept a sharing message', () => {
    const shareMessage = 'message';
    const wrapper = mount({ shareMessage });
    expect(wrapper.find(RShare).prop('message')).toEqual(shareMessage);
  });

  it('should accept a sharing url', () => {
    const shareUrl = 'http://some.url.com';
    const wrapper = mount({ shareUrl });
    expect(wrapper.find(RShare).prop('url')).toEqual(shareUrl);
  });

  it('should contain a divider component', () => {
    const wrapper = mount();
    expect(wrapper.find(RDivider).length).toEqual(1);
  });

  it('should contain a newsletter component', () => {
    const wrapper = mount();
    expect(wrapper.find(RNewsletter).length).toEqual(1);
  });
});
