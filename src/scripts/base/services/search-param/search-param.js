import queryString from 'query-string';

const _public = {};

_public.get = () => {
  return queryString.parse(window.location.search);
};

export default _public;
