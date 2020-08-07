const shortid = require('shortid');

const _public = {};

_public.init = () => {
  console.log(shortid.generate());
};

_public.init();

module.exports = _public;
