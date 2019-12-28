import React from 'react';
import { shallow } from 'enzyme';
import { RAlert } from '@scripts/base/components/alert/alert';

describe('Alert', () => {
  function mount(props = {}){
    return shallow(
      <RAlert
        theme={ props.theme }
        onTriggerClick={ props.onTriggerClick }
        triggerText={ props.triggerText }>
        { props.content }
      </RAlert>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-alert');
  });

  it('should optionally set a danger theme', () => {
    const wrapper = mount({ theme: 'danger' });
    expect(wrapper.prop('className').includes('r-alert-danger')).toEqual(true);
  });

  it('should optionally set a success theme', () => {
    const wrapper = mount({ theme: 'success' });
    expect(wrapper.prop('className').includes('r-alert-success')).toEqual(true);
  });

  it('should optionally set a trigger', () => {
    const onTriggerClick = jest.fn();
    const wrapper = mount({ onTriggerClick });
    wrapper.find('button').simulate('click')
    expect(onTriggerClick).toHaveBeenCalled();
  });

  it('should set a trigger text', () => {
    const triggerText = 'Retry';
    const wrapper = mount({ onTriggerClick: jest.fn(), triggerText });
    expect(wrapper.find('button').text()).toEqual(triggerText);
  });

  it('should set a trigger css class if a trigger action has been passed', () => {
    const wrapper = mount({ onTriggerClick: jest.fn() });
    expect(wrapper.prop('className').includes('r-alert-has-trigger')).toEqual(true);
  });

  it('should render some content', () => {
    const content = <p>Hello!</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text().trim()).toEqual('Hello!');
  });
});
