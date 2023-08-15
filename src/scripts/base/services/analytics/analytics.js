import GAnalytics from '@glorious/analytics';
import envService from '@scripts/base/services/env/env';
import windowService from '@scripts/base/services/window/window';

let analytics;

const _public = {};

_public.init = () => {
  if(shouldInitialize()) {
    const { DOMAIN, OPTIONS } = envService.get().ANALYTICS.PLAUSIBLE;
    analytics = new GAnalytics();
    analytics.init(DOMAIN, OPTIONS);
    _public.trackPageView();
  }
};

_public.trackPageView = () => analytics && analytics.trackPageview();

_public.flush = () => {
  analytics = null;
}

function shouldInitialize(){
  const { WEBSITE_DOMAIN, ANALYTICS } = envService.get();
  return ANALYTICS.ENABLED && windowService.getLocationOrigin().includes(WEBSITE_DOMAIN);
}

export default _public;
