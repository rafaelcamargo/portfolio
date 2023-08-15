import ENV from '@environment';

const _public = {};

_public.get = () => ENV;

export default _public;
