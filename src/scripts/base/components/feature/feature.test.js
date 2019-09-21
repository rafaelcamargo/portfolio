import React from 'react';
import { shallow } from 'enzyme';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';
import { RFeature } from '@scripts/base/components/feature/feature';

describe('Feature', () => {
  function mount(props = {}){
    return shallow(
      <RFeature title={ props.title } ctaTo={ props.ctaTo } ctaText={ props.ctaText }>
        { props.content }
      </RFeature>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-feature');
  });

  it('should render some title', () => {
    const title = 'Hello!'
    const wrapper = mount({ title });
    expect(wrapper.find('h2').text().trim()).toEqual(title);
  });

  it('should render a cta link', () => {
    const ctaTo = '/experience';
    const ctaText = 'See my experience';
    const wrapper = mount({ ctaTo, ctaText });
    expect(wrapper.find(RCtaLink).props().to).toEqual(ctaTo);
    expect(wrapper.find(RCtaLink).props().text).toEqual(ctaText);
  });

  it('should optionally render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
