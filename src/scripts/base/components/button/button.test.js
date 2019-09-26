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
        onClick={ props.onClick }>
        { props.content }
      </RButton>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-button');
  });

  it('should optionally set a theme', () => {
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
