import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './router';
import app from './app';

jest.mock('react-dom');

describe('App', () => {
  function createAppContainerMock(){
    const container = document.createElement('div');
    container.setAttribute('data-app', '');
    return container;
  }

  it('should render App', () => {
    const container = createAppContainerMock();
    document.body.appendChild(container);
    ReactDOM.render = jest.fn();
    app.init();
    expect(ReactDOM.render.mock.calls[0][0]).toEqual(<AppRouter />);
    expect(ReactDOM.render.mock.calls[0][1]).toEqual(container);
  });
});
