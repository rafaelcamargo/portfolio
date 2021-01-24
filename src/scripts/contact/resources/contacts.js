import ENV from '@environment';
import baseResource from '@scripts/base/resources/base';

const _public = {};

_public.send = data => {
  return baseResource.post(ENV.FORMPIE.BASE_URL, data);
};

export default _public;
