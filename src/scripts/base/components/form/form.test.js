import React from 'react';
import { shallow } from 'enzyme';
import { PromiseMock } from '@scripts/base/mocks/promise';
import { RAlert } from '@scripts/base/components/alert/alert';
import { RLoader } from '@scripts/base/components/loader/loader';
import { RForm } from '@scripts/base/components/form/form';

describe('Form', () => {
  function submitForm(wrapper){
    const eventMock = { preventDefault: jest.fn() };
    wrapper.simulate('submit', eventMock);
    return eventMock;
  }

  function simulateSubmit(resultType, { errorMessage, successMessage } = {}){
    const onSubmit = jest.fn(() => new PromiseMock(resultType, { response: {} }));
    const wrapper = mount({
      onSubmit,
      onSubmitError: jest.fn(),
      onSubmitSuccess: jest.fn(),
      errorMessage,
      successMessage
    });
    submitForm(wrapper);
    return wrapper;
  }

  function mount(props = {}){
    return shallow(
      <RForm
        onSubmit={ props.onSubmit }
        onSubmitSuccess={ props.onSubmitSuccess }
        onSubmitError={ props.onSubmitError }
        errorMessage={ props.errorMessage }
        successMessage={ props.successMessage }>
        { props.content }
      </RForm>
    );
  }

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('r-form');
  });

  it('should execute submit callback on submit', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onSubmit });
    const evt = submitForm(wrapper);
    expect(evt.preventDefault).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should execute submit success callback on submit success', () => {
    const response = { some: 'response' };
    const onSubmit = jest.fn(() => new PromiseMock('success', { response }));
    const onSubmitSuccess = jest.fn();
    const wrapper = mount({ onSubmit, onSubmitSuccess });
    submitForm(wrapper);
    expect(onSubmitSuccess).toHaveBeenCalledWith(response);
  });

  it('should execute submit error callback on submit error', () => {
    const err = { some: 'error' };
    const onSubmit = jest.fn(() => new PromiseMock('error', { response: err }));
    const onSubmitError = jest.fn();
    const wrapper = mount({ onSubmit, onSubmitError });
    submitForm(wrapper);
    expect(onSubmitError).toHaveBeenCalledWith(err);
  });

  it('should show loader on submit', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onSubmit });
    submitForm(wrapper);
    expect(wrapper.find(RLoader).length).toEqual(1);
  });

  it('should remove loader on submit complete', () => {
    const onSubmit = jest.fn(() => new PromiseMock('success', { response: {} }));
    const wrapper = mount({ onSubmit, onSubmitSuccess: jest.fn() });
    submitForm(wrapper);
    expect(wrapper.find(RLoader).length).toEqual(0);
  });

  it(' should show default error alert on submit error', () => {
    const wrapper = simulateSubmit('error');
    const alertElement = wrapper.find(RAlert);
    expect(alertElement.length).toEqual(1);
    expect(alertElement.prop('theme')).toEqual('danger');
    expect(alertElement.prop('triggerText')).toEqual('Retry');
    expect(alertElement.prop('children')).toEqual('Sorry, something went wrong.');
  });

  it(' should optionally show a custom error alert on submit error', () => {
    const errorMessage = 'Some custom error!';
    const wrapper = simulateSubmit('error', { errorMessage });
    const alertElement = wrapper.find(RAlert);
    expect(alertElement.prop('children')).toEqual(errorMessage);
  });

  it('should submit on error alert trigger click', () => {
    const evtMock = { preventDefault: jest.fn() };
    const onSubmit = jest.fn(() => new PromiseMock('error', { response: {} }));
    const wrapper = mount({ onSubmit, onSubmitError: jest.fn() });
    submitForm(wrapper);
    wrapper.find(RAlert).prop('onTriggerClick')(evtMock);
    expect(onSubmit.mock.calls.length).toEqual(2);
  });

  it('should remove error alert on error alert trigger click', () => {
    const evtMock = { preventDefault: jest.fn() };
    const onSubmit = jest.fn(() => new PromiseMock('success', { shouldAbortRequest: true }));
    const wrapper = mount({ onSubmit });
    wrapper.setState({ shouldShowErrorAlert: true });
    expect(wrapper.find(RAlert).length).toEqual(1);
    wrapper.find(RAlert).prop('onTriggerClick')(evtMock);
    expect(wrapper.find(RAlert).length).toEqual(0);
  });

  it(' should show default success alert on submit success', () => {
    const wrapper = simulateSubmit('success');
    const alertElement = wrapper.find(RAlert);
    expect(alertElement.length).toEqual(1);
    expect(alertElement.prop('theme')).toEqual('success');
    expect(alertElement.prop('triggerText')).toBeFalsy();
    expect(alertElement.prop('children')).toEqual('Success!');
  });

  it(' should optionally show custom success alert on submit success', () => {
    const successMessage = 'Custom success!';
    const wrapper = simulateSubmit('success', { successMessage });
    const alertElement = wrapper.find(RAlert);
    expect(alertElement.prop('children')).toEqual(successMessage);
  });

  it('should render some content', () => {
    const content = <p>Hello</p>;
    const wrapper = mount({ content });
    expect(wrapper.find('p').text()).toEqual('Hello');
  });
});
