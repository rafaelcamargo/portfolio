import ReactGA from 'react-ga';
import ENV from '@environment';

const _public = {};

_public.init = () => {
  ReactGA.initialize(ENV.ANALYTICS.GOOGLE.ID);
};

_public.trackPageView = pathname => {
  ReactGA.pageview(pathname);
};

export default _public;
