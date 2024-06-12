import GAnalytics from '@glorious/analytics';
import envService from '@scripts/base/services/env/env';
import windowService from '@scripts/base/services/window/window';
import stastaService from '@scripts/base/services/stasta/stasta';

let analytics;

const _public = {};

_public.init = () => {
  if(shouldInitialize()) {
    const { ENABLED, PLAUSIBLE, STASTA } = envService.get().ANALYTICS;
    analytics = new GAnalytics();
    analytics.init(PLAUSIBLE.DOMAIN, PLAUSIBLE.OPTIONS);
    stastaService.init(ENABLED, STASTA);
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
