import ENV from '@environment';
import Plausible from 'plausible-tracker'
import searchParamsService from '@scripts/base/services/search-param/search-param';

const _public = {};

_public.init = () => {
  if(!isAnalyticsDisabled()) getPlausible().trackPageview();
};

_public.trackPageView = () => {
  if(!isAnalyticsDisabled()) getPlausible().trackPageview();
};

function isAnalyticsDisabled(){
  const { analytics } = searchParamsService.get();
  return analytics === 'disabled';
}

function getPlausible(){
  return Plausible({
    domain: ENV.ANALYTICS.PLAUSIBLE.DOMAIN,
    trackLocalhost: ENV.ANALYTICS.ENABLED
  });
}

export default _public;
