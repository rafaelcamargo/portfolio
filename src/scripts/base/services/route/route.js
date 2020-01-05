import analyticsService from '@scripts/base/services/analytics/analytics';

const _public = {};

_public.init = history => {
  setHistory(history);
  listenHistoryChange(history);
};

_public.getCurrentPathname = () => {
  return window.location.pathname;
};

_public.openUrl = (url, params) => {
  window.open(buildFullUrl(url, params));
};

_public.getCurrentUrl = () => {
  return window.location.href;
};

function setHistory(history){
  _public.history = history;
}

function listenHistoryChange(history){
  history.listen(onHistoryChange);
}

function onHistoryChange(){
  trackPageView(_public.history.location.pathname);
}

function trackPageView(pathname){
  analyticsService.trackPageView(pathname);
}

function buildFullUrl(url, params){
  return params ? `${url}?${stringifyUrlParams(params)}` : url;
}

function stringifyUrlParams(params){
  return Object.entries(params).map(([key, value]) => {
    return `${key}=${encodeURI(value)}`;
  }).join('&');
}

export default _public;
