import ENV from '@environment';
import vervetResource from '@scripts/base/resources/vervet';

const _public = {};

_public.send = message => {
  return vervetResource.post(ENV.VERVET.PROJECTS.MAILER.ID, 'messages', message);
};

export default _public;
