const _public = {};

_public.getCurrentPathname = () => {
  return window.location.pathname;
};

_public.openUrl = (url, params) => {
  window.open(buildFullUrl(url, params));
};

_public.getCurrentUrl = () => {
  return window.location.href;
};

function buildFullUrl(url, params){
  return params ? `${url}?${stringifyUrlParams(params)}` : url;
}

function stringifyUrlParams(params){
  return Object.entries(params).map(([key, value]) => {
    return `${key}=${encodeURI(value)}`;
  }).join('&');
}

export default _public;
