export function mockSearchParams(paramsString){
  const { pathname } = window.location;
  const url = paramsString ? `${pathname}?${paramsString}` : pathname;
  window.history.pushState({}, '', url);
}
