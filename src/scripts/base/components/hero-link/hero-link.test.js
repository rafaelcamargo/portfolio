import React from 'react';
import { shallow } from 'enzyme';
import { RHeroLink } from './hero-link';

describe('Hero Link', () => {
  function mount(props = {}){
    return shallow(
      <RHeroLink
        href={ props.href }
        text={ props.text }
        onClick={ props.onClick } />
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-hero-link');
  });

  it('should render a link', () => {
    const href = 'https://some.url.com';
    const text = 'Go';
    const wrapper = mount({ href, text });
    expect(wrapper.find('a').prop('href')).toEqual(href);
    expect(wrapper.find('a').text()).toEqual(text);
  });

  it('should execute click callback if callback has been passed', () => {
    const evtMock = { some: 'evt' };
    const onClick = jest.fn();
    const wrapper = mount({ onClick });
    wrapper.find('a').simulate('click', evtMock);
    expect(onClick).toHaveBeenCalledWith(evtMock);
  });

  it('should not execute click callback if no callback has been passed', () => {
    const onClick = jest.fn();
    const wrapper = mount({ onClick });
    wrapper.setProps({ onClick: null });
    wrapper.find('a').simulate('click');
    expect(onClick).not.toHaveBeenCalled();
  });
});
