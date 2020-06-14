import React from 'react';
import { shallow } from 'enzyme';
import { RButton } from '@scripts/base/components/button/button';
import { RIcon } from '@scripts/base/components/icon/icon';

describe('Button', () => {
  function mount(props = {}){
    return shallow(
      <RButton
        iconName={ props.iconName }
        theme={ props.theme }
        ariaLabel={ props.ariaLabel }
        onClick={ props.onClick }
        type={ props.type }>
        { props.content }
      </RButton>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-button');
  });

  it('should set type as button by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('type')).toEqual('button');
  });

  it('should optionally set a custom type', () => {
    const type = 'submit';
    const wrapper = mount({ type });
    expect(wrapper.prop('type')).toEqual(type);
  });

  it('should optionally set a primary theme', () => {
    const wrapper = mount({ theme: 'primary' });
    expect(wrapper.prop('className').includes('r-button-theme-primary')).toEqual(true);
  });

  it('should optionally set a link theme', () => {
    const wrapper = mount({ theme: 'link' });
    expect(wrapper.prop('className').includes('r-button-theme-link')).toEqual(true);
  });

  it('should optionally set a faceless theme', () => {
    const wrapper = mount({ theme: 'faceless' });
    expect(wrapper.prop('className').includes('r-button-theme-faceless')).toEqual(true);
  });

  it('should not set aria label by default', () => {
    const wrapper = mount();
    expect(wrapper.prop('aria-label')).not.toBeDefined();
  });

  it('should optionally set some aria label', () => {
    const ariaLabel = 'menu';
    const wrapper = mount({ ariaLabel });
    expect(wrapper.prop('aria-label')).toEqual(ariaLabel);
  });

  it('should not render an icon on the button by default', () => {
    const wrapper = mount();
    expect(wrapper.find(RIcon).length).toEqual(0);
  });

  it('should optionally render an icon on the button', () => {
    const iconName = 'menu';
    const wrapper = mount({ iconName });
    expect(wrapper.find(RIcon).props().name).toEqual(iconName);
  });

  it('should not render a label by default', () => {
    const wrapper = mount();
    expect(wrapper.find('span').length).toEqual(0);
  })

  it('should optionally render some label', () => {
    const label = 'Hello!';
    const wrapper = mount({ content: label });
    expect(wrapper.find('span').text()).toEqual(label);
  });

  it('should execute click callback on click', () => {
    const onClick = jest.fn();
    const wrapper = mount({ onClick });
    wrapper.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
