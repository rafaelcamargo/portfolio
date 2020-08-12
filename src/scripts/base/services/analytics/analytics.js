import ENV from '@environment';
import dateService from '@scripts/base/services/date/date';
import searchParamsService from '@scripts/base/services/search-param/search-param';

const _public = {};

_public.init = () => {
  if(!isAnalyticsDisabled()) {
    const googleAnalyticsId = getGoogleAnalyticsId();
    buildGoogleAnalyticsScriptTag(googleAnalyticsId);
    configAnalytics(googleAnalyticsId);
    window.mixpanel.init(ENV.ANALYTICS.MIXPANEL.TOKEN);
    _public.trackEvent('page viewed', { path: window.location.pathname });
  }
};

_public.trackPageView = path => {
  if(!isAnalyticsDisabled()) {
    configAnalytics(getGoogleAnalyticsId(), path);
    _public.trackEvent('page viewed', { path });
  }
};

_public.trackEvent = (eventName, data) => {
  if(!isAnalyticsDisabled())
    window.mixpanel.track(eventName, data);
};

function isAnalyticsDisabled(){
  const { analytics } = searchParamsService.get();
  return analytics === 'disabled';
}

function buildGoogleAnalyticsScriptTag(id){
  const tag = document.createElement('script');
  tag.setAttribute('async', 'true');
  tag.setAttribute('src', `${ENV.ANALYTICS.GOOGLE.BASE_URL}?id=${id}`);
  document.head.appendChild(tag);
}

function configAnalytics(id, path){
  if(!path)
    gtag('js', dateService.getNow());
  gtag('config', id, { page_path: (path || window.location.pathname) });
}

function gtag(){
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

function getGoogleAnalyticsId(){
  return ENV.ANALYTICS.GOOGLE.ID;
}

export default _public;
