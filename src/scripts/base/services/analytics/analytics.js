import ENV from '@environment';
import dateService from '@scripts/base/services/date/date';

const _public = {};

_public.init = () => {
  const id = getGoogleAnalyticsId();
  buildGoogleAnalyticsScriptTag(id);
  configAnalytics(id);
};

_public.trackPageView = path => {
  configAnalytics(getGoogleAnalyticsId(), path);
};

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
