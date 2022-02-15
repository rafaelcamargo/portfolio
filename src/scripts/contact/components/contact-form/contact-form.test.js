import React from 'react';
import { shallow } from 'enzyme';
import { Form, Input, Textarea } from '@glorious/taslonic/react';
import { ContactForm } from '@scripts/contact/components/contact-form/contact-form';
import contactResource from '@scripts/contact/resources/contacts';

describe('Contact Form', () => {
  function mount(){
    return shallow(
      <ContactForm />
    );
  }

  function mockFormControlEvent(name, value){
    return { target: { name, value } };
  }

  function buildFormData(){
    return {
      name: 'Rafael',
      email: 'some@email.com',
      subject: 'Some subject',
      message: 'Some message'
    };
  }

  beforeEach(() => {
    contactResource.send = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-contact-form');
  });

  it('should send contact on submit', () => {
    const { name, email, subject, message } = buildFormData()
    const wrapper = mount();
    wrapper.find(Input).at(0).simulate('change', mockFormControlEvent('name', name))
    wrapper.find(Input).at(1).simulate('change', mockFormControlEvent('email', email))
    wrapper.find(Input).at(2).simulate('change', mockFormControlEvent('subject', subject))
    wrapper.find(Textarea).at(0).simulate('change', mockFormControlEvent('message', message))
    wrapper.find(Form).prop('onSubmit')();
    expect(contactResource.send).toHaveBeenCalledWith({
      to: 'vervetapp@gmail.com',
      name,
      email,
      subject,
      message
    });
  });

  it('should clear form controls on submit success', () => {
    const { name, email, subject, message } = buildFormData()
    const wrapper = mount();
    wrapper.find(Input).at(0).simulate('change', mockFormControlEvent('name', name))
    wrapper.find(Input).at(1).simulate('change', mockFormControlEvent('email', email))
    wrapper.find(Input).at(2).simulate('change', mockFormControlEvent('subject', subject))
    wrapper.find(Textarea).at(0).simulate('change', mockFormControlEvent('message', message))
    wrapper.find(Form).prop('onSubmitSuccess')();
    expect(wrapper.find(Input).at(0).prop('value')).toEqual('')
    expect(wrapper.find(Input).at(1).prop('value')).toEqual('')
    expect(wrapper.find(Input).at(2).prop('value')).toEqual('')
    expect(wrapper.find(Textarea).at(0).prop('value')).toEqual('')
  });
});
