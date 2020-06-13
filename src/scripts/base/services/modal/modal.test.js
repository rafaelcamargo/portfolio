import React from 'react';
import ReactDOM from 'react-dom';
import idService from '@scripts/base/services/id/id';
import modalService from './modal';

jest.useFakeTimers();

describe('Modal Service', () => {
  function getModalContainers() {
    return document.querySelectorAll('[data-modal-container]');
  }

  function getModalWrapper(id) {
    return document.querySelector(`[data-modal-wrapper="${id}"]`);
  }

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should create a modal container if no container has been already created', () => {
    expect(getModalContainers().length).toEqual(0);
    modalService.open();
    expect(getModalContainers().length).toEqual(1);
  });

  it('should create no more than one container regardless the number of modals open', () => {
    modalService.open();
    modalService.open();
    modalService.open();
    expect(getModalContainers().length).toEqual(1);
  });

  it('should wrap modal on open', () => {
    idService.generate = jest.fn(() => '123');
    modalService.open();
    expect(getModalWrapper('123')).toBeDefined();
  });

  it('should destroy modal wrapper asynchronously on close', () => {
    idService.generate = jest.fn(() => '324');
    const modal = modalService.open();
    expect(getModalWrapper('324')).toBeDefined();
    modal.close();
    jest.runOnlyPendingTimers();
    expect(getModalWrapper('324')).toEqual(null);
  });

  it('should unmount modal content on close', () => {
    ReactDOM.unmountComponentAtNode = jest.fn();
    idService.generate = jest.fn(() => '567');
    const modal = modalService.open();
    const wrapper = getModalWrapper('567');
    modal.close();
    expect(ReactDOM.unmountComponentAtNode).toHaveBeenCalledWith(
      wrapper
    );
  });

  it('should optionally set a title', () => {
    idService.generate = jest.fn(() => 'abc');
    const title = 'Custom Title';
    modalService.open({ title });
    const wrapper = getModalWrapper('abc');
    expect(wrapper.querySelector('[data-modal-title]').textContent).toEqual(title);
  });

  it('should optionally set a width', () => {
    idService.generate = jest.fn(() => 'def');
    const width = '300px';
    modalService.open({ width });
    const wrapper = getModalWrapper('def');
    expect(wrapper.querySelector('[data-modal]').style.maxWidth).toEqual(width);
  });

  it('should execute close callback on close', () => {
    idService.generate = jest.fn(() => 'ghi');
    const onClose = jest.fn();
    modalService.open({ onClose });
    const wrapper = getModalWrapper('ghi');
    wrapper.querySelector('[data-modal-close-button]').click();
    expect(onClose).toHaveBeenCalled();
  });

  it('should render a custom content', () => {
    idService.generate = jest.fn(() => 'jkl');
    const content = <p>Hello!</p>;
    modalService.open({ content });
    const wrapper = getModalWrapper('jkl');
    expect(wrapper.querySelector('p').textContent).toEqual('Hello!');
  });
});
