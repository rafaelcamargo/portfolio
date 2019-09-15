import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './router';

const _public = {};

_public.init = () => {
  ReactDOM.render(<AppRouter />, document.querySelector('[data-app]'));
};

_public.init();

export default _public;
