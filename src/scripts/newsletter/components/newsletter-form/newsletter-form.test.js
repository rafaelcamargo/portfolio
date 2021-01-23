import React from 'react';
import { shallow } from 'enzyme';
import { Field, Form, Button, Input } from '@glorious/taslonic/react';
import newsletterResource from '@scripts/newsletter/resources/newsletter';
import { NewsletterForm } from './newsletter-form';

describe('Newsletter Modal Trigger', () => {
  function mount(props = {}){
    const lang = props.lang || 'en';
    return shallow(
      <NewsletterForm lang={ lang } />
    );
  }

  function mockInputEvent(name, value){
    return { target: { name, value } };
  }

  beforeEach(() => {
    newsletterResource.subscribe = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-newsletter-form');
  });

  it('should submit data on subscribe', () => {
    const name = 'Rafael';
    const email = 'some@email.com';
    const wrapper = mount();
    wrapper.find(Input).at(0).simulate('change', mockInputEvent('name', name))
    wrapper.find(Input).at(1).simulate('change', mockInputEvent('email', email))
    wrapper.find(Form).simulate('submit');
    expect(newsletterResource.subscribe).toHaveBeenCalledWith({
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
        LANG: 'English',
        PROJECT: 'portfolio'
      }
    });
  });

  it('should clear entered form data on submit success', () => {
    const name = 'Rafael';
    const email = 'some@email.com';
    const wrapper = mount();
    wrapper.find(Input).at(0).simulate('change', mockInputEvent('name', name))
    wrapper.find(Input).at(1).simulate('change', mockInputEvent('email', email))
    wrapper.find(Form).prop('onSubmitSuccess')();
    expect(wrapper.find(Input).at(0).prop('value')).toEqual('');
    expect(wrapper.find(Input).at(1).prop('value')).toEqual('');
  })

  it('should optionally render texts in portuguese', () => {
    const wrapper = mount({ lang: 'pt' });
    expect(wrapper.find(Field).at(0).prop('label')).toEqual('Nome');
    expect(wrapper.find(Field).at(1).prop('label')).toEqual('Email');
    expect(wrapper.find(Button).at(0).prop('children')).toEqual('Inscrever-se');
    expect(wrapper.find(Form).prop('submitSuccessTitle')).toEqual('Obrigado!');
    expect(wrapper.find(Form).prop('submitSuccessMessage')).toEqual('Você está inscrito para receber minhas últimas atualizações.');
    expect(wrapper.find(Form).prop('submitErrorMessage')).toEqual('Algo deu errado. Por favor, tente novamente.');
  });

  it('should optionally set subscription language as portuguese', () => {
    const name = 'Rafael';
    const email = 'some@email.com';
    const wrapper = mount({ lang: 'pt' });
    wrapper.find(Input).at(0).simulate('change', mockInputEvent('name', name))
    wrapper.find(Input).at(1).simulate('change', mockInputEvent('email', email))
    wrapper.find(Form).simulate('submit');
    expect(newsletterResource.subscribe).toHaveBeenCalledWith({
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
        LANG: 'Portuguese',
        PROJECT: 'portfolio'
      }
    });
  })
});
