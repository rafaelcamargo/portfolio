const devEnv = require('../../../../../environments/development');
const prodEnv = require('../../../../../environments/production');

const _public = {};

_public.get = environment => {
  return environment == 'production' ? prodEnv : devEnv;
};

module.exports = _public;
