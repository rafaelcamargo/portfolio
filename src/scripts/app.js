import '@styles/_native.styl';
import ENV from '@environment';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import analyticsService from '@scripts/base/services/analytics/analytics';

const _public = {};

_public.init = () => {
  analyticsService.init(ENV);
  ReactDOM.render(<AppRouter />, document.querySelector('[data-app]'));
};

_public.init();

export default _public;
