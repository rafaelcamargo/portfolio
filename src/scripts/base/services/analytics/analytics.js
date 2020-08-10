import dateService from '@scripts/base/services/date/date';

let ENV;
const _public = {};

_public.init = environment => {
  setEnvironment(environment);
  if(ENV.ANALYTICS.ENABLED) {
    buildGoogleAnalyticsScriptTag(getGoogleAnalyticsId());
    configAnalytics(getGoogleAnalyticsId());
    window.mixpanel.init(getMixPanelToken());
    _public.trackEvent('page viewed', { path: window.location.pathname });
  }
};

_public.trackPageView = path => {
  if(ENV.ANALYTICS.ENABLED) {
    configAnalytics(getGoogleAnalyticsId(), path);
    _public.trackEvent('page viewed', { path });
  }
};

_public.trackEvent = (eventName, data) => {
  if(ENV.ANALYTICS.ENABLED)
    window.mixpanel.track(eventName, data);
};

function setEnvironment(environment){
  ENV = environment;
}

function getGoogleAnalyticsId(){
  return ENV.ANALYTICS.GOOGLE.ID;
}

function getMixPanelToken(){
  return ENV.ANALYTICS.MIXPANEL.TOKEN;
}

function buildGoogleAnalyticsScriptTag(id){
  const tag = document.createElement('script');
  tag.setAttribute('async', 'true');
  tag.setAttribute('src', buildGoogleAnalyticsBaseUrl(id));
  document.head.appendChild(tag);
}

function buildGoogleAnalyticsBaseUrl(id){
  return `${ENV.ANALYTICS.GOOGLE.BASE_URL}?id=${id}`
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

export default _public;
