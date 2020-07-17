import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Icon } from '@scripts/base/components/icon/icon';
import { CtaLink } from '@scripts/base/components/cta-link/cta-link';

describe('CTA Link', () => {
  function mount(props = {}){
    return shallow(
      <CtaLink
        to={ props.to }
        href={ props.href }
        text={ props.text }
        onClick={ props.onClick } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-cta-link');
  });

  it('should render some internal link', () => {
    const to = '/skills';
    const text = 'See My Skills';
    const wrapper = mount({ to, text });
    expect(wrapper.find(Link).prop('to')).toEqual(to);
    expect(wrapper.find(Icon).prop('name')).toEqual('arrow');
    expect(wrapper.find('[data-cta-link-text]').text()).toEqual(text);
  });

  it('should render some external link', () => {
    const href = 'https://some.story.com';
    const text = 'Read full story';
    const wrapper = mount({ href, text });
    expect(wrapper.find('a').prop('href')).toEqual(href);
    expect(wrapper.find(Icon).prop('name')).toEqual('arrow');
    expect(wrapper.find('[data-cta-link-text]').text()).toEqual(text);
  });

  it('should execute click callback on external link click if callback has been provided', () => {
    const onClick = jest.fn();
    const wrapper = mount({ onClick });
    wrapper.find('a').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
