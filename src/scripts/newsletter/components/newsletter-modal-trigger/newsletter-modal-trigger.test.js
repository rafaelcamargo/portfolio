import React from 'react';
import { shallow } from 'enzyme';
import { dialog } from '@glorious/taslonic/react';
import { Button } from '@scripts/base/components/button/button';
import { NewsletterForm } from '@scripts/newsletter/components/newsletter-form/newsletter-form';
import { NewsletterModalTrigger } from './newsletter-modal-trigger';


describe('Newsletter Modal Trigger', () => {
  function mount(props = {}){
    return shallow(
      <NewsletterModalTrigger>
        { props.content }
      </NewsletterModalTrigger>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-newsletter-modal-trigger');
  });

  it('should render some content', () => {
    const content = 'Click';
    const wrapper = mount({ content });
    expect(wrapper.find(Button).prop('children')).toEqual(content);
  });

  it('should open newsletter modal on click', () => {
    dialog.open = jest.fn();
    const wrapper = mount();
    wrapper.find(Button).simulate('click');
    expect(dialog.open).toHaveBeenCalledWith({
      title: 'Newsletter',
      content: <NewsletterForm />,
      width: '350px'
    });
  });
});
