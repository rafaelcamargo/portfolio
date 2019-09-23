import analyticsService from '@scripts/base/services/analytics/analytics';

const _public = {};

_public.init = history => {
  setHistory(history);
  listenHistoryChange(history);
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

export default _public;
