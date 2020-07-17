import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '@scripts/base/components/modal/modal';

describe('Modal', () => {
  function mount(props = {}){
    return shallow(
      <Modal
        title={ props.title }
        width={ props.width }
        onClose={ props.onClose }>
        { props.children }
      </Modal>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.find('[data-modal]').prop('className')).toEqual('r-modal');
  });

  it('should contain a backdrop', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-modal-backdrop');
  });

  it('should not render a title by default', () => {
    const wrapper = mount();
    expect(wrapper.find('[data-modal-title]').length).toEqual(0);
  });

  it('should optionally render a title', () => {
    const title = 'Newsletter';
    const wrapper = mount({ title });
    expect(wrapper.find('[data-modal-title]').text()).toEqual(title);
  });

  it('should optionally set a width', () => {
    const width = '300px';
    const wrapper = mount({ width });
    expect(wrapper.find('[data-modal]').prop('style')).toEqual({
      maxWidth: '300px'
    });
  });

  it('should render some content', () => {
    const children = <p>Hello</p>;
    const wrapper = mount({ children });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });

  it('should execute close callback on close button click', () => {
    const onClose = jest.fn();
    const wrapper = mount({ onClose });
    wrapper.find('[data-modal-close-button]').simulate('click');
    expect(onClose).toHaveBeenCalled();
  });
});
