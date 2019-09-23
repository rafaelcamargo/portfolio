import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './router';
import app from './app';
import analyticsService from '@scripts/base/services/analytics/analytics';

jest.mock('react-dom');
jest.mock('@scripts/base/services/analytics/analytics');

describe('App', () => {
  function createAppContainerMock(){
    const container = document.createElement('div');
    container.setAttribute('data-app', '');
    return container;
  }

  function prepareDOM(){
    const container = createAppContainerMock();
    document.body.appendChild(container);
    ReactDOM.render = jest.fn();
    return container;
  }

  it('should render App', () => {
    const container = prepareDOM();
    app.init();
    expect(ReactDOM.render.mock.calls[0][0]).toEqual(<AppRouter />);
    expect(ReactDOM.render.mock.calls[0][1]).toEqual(container);
  });

  it('should initialize analytics service', () => {
    prepareDOM();
    app.init();
    expect(analyticsService.init).toHaveBeenCalled();
  });
});
