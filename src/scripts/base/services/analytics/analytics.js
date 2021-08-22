import ENV from '@environment';
import GAnalytics from '@glorious/analytics';

let analytics;

const _public = {};

_public.init = () => {
  analytics = new GAnalytics();
  analytics.init(ENV.ANALYTICS.PLAUSIBLE.DOMAIN, {
    trackLocalhost: ENV.ANALYTICS.ENABLED
  });
  _public.trackPageView();
};

_public.trackPageView = () => {
  analytics.trackPageview();
};

export default _public;
