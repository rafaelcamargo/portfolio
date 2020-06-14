import React from 'react';
import { shallow } from 'enzyme';
import modalService from '@scripts/base/services/modal/modal';
import { RButton } from '@scripts/base/components/button/button';
import { RNewsletterForm } from '@scripts/newsletter/components/newsletter-form/newsletter-form';
import { RNewsletterModalTrigger } from './newsletter-modal-trigger';


describe('Newsletter Modal Trigger', () => {
  function mount(props = {}){
    return shallow(
      <RNewsletterModalTrigger>
        { props.content }
      </RNewsletterModalTrigger>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-newsletter-modal-trigger');
  });

  it('should render some content', () => {
    const content = 'Click';
    const wrapper = mount({ content });
    expect(wrapper.find(RButton).prop('children')).toEqual(content);
  });

  it('should open newsletter modal on click', () => {
    modalService.open = jest.fn();
    const wrapper = mount();
    wrapper.find(RButton).simulate('click');
    expect(modalService.open).toHaveBeenCalledWith({
      title: 'Newsletter',
      content: <RNewsletterForm />,
      width: '350px'
    });
  });
});
