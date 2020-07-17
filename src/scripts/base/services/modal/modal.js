import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from '@scripts/base/components/modal/modal';
import idService from '@scripts/base/services/id/id';

const service = {};

service.open = ({ title, width, onClose, content } = {}) => {
  const id = idService.generate();
  const container = getContainer();
  const wrapper = buildWrapper(id);
  const modal = buildModal({ id, title, width, onClose, content });
  container.appendChild(wrapper);
  ReactDOM.render(modal, wrapper);
  return { close: () => destroy(id) };
};

function getContainer() {
  const containerSelector = `[${getContainerCustomAttribute()}]`;
  return document.querySelector(containerSelector) || buildContainer();
}

function buildContainer() {
  const container = document.createElement('div');
  container.setAttribute(getContainerCustomAttribute(), '');
  document.body.appendChild(container);
  return container;
}

function getContainerCustomAttribute() {
  return 'data-modal-container';
}

function buildWrapper(id) {
  const wrapper = document.createElement('div');
  wrapper.setAttribute(getWrapperCustomAttribute(), id);
  return wrapper;
}

function getWrapperCustomAttribute() {
  return 'data-modal-wrapper';
}

function buildModal({ id, title, width, onClose, content }) {
  return (
    <Modal
      title={ title }
      width={ width }
      onClose={ () => onModalClose(id, onClose) }>
      { content }
    </Modal>
  );
}

function onModalClose(id, onClose) {
  destroy(id);
  return onClose && onClose();
}

function destroy(id) {
  const modalWrapperSelector = `[${getWrapperCustomAttribute()}="${id}"]`;
  const wrapper = document.querySelector(modalWrapperSelector);
  ReactDOM.unmountComponentAtNode(wrapper);
  setTimeout(() => wrapper.remove());
}

export default service;
