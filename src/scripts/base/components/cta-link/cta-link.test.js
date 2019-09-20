import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { RIcon } from '@scripts/base/components/icon/icon';
import { RCtaLink } from '@scripts/base/components/cta-link/cta-link';

describe('CTA Link', () => {
  function mount(props = {}){
    return shallow(
      <RCtaLink to={ props.to } text={ props.text } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-cta-link');
  });

  it('should render a link', () => {
    const to = '/skills';
    const text = 'See My Skills';
    const wrapper = mount({ to, text });
    expect(wrapper.find(Link).prop('to')).toEqual(to);
    expect(wrapper.find(RIcon).prop('name')).toEqual('arrow');
    expect(wrapper.find('[data-cta-link-text]').text()).toEqual(text);
  });
});
