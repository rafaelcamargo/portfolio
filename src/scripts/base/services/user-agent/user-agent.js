import { isbot } from 'isbot';
import windowService from '@scripts/base/services/window/window';

const _public = {};

_public.isBot = () => isbot(windowService.getUserAgent());

export default _public;
