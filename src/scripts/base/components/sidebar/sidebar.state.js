import { createStore } from 'redux'

const _public = {};

_public.store = createStore(toggle);

_public.reset = () => {
  _public.store.dispatch({ type: 'HIDE' });
};

_public.toggle = () => {
  const { visible } = _public.store.getState();
  const type = visible ? 'HIDE' : 'SHOW';
  _public.store.dispatch({ type });
};

function toggle(state, action){
  return action.type == 'SHOW' ? { visible: true } : { visible: false };
}

export default _public;
