import userAgentService from '@scripts/base/services/user-agent/user-agent';

const _public = {}

_public.init = (ENABLED, { ID, SRC }) => {
  if(statsEnabled(ENABLED)) {
    const tag = document.createElement('script');
    Object.entries(buildAttrs(ID, SRC)).forEach(([key, value]) => tag.setAttribute(key, value));
    document.body.appendChild(tag);
  }
};

function statsEnabled(ENABLED){
  const params = new URLSearchParams(window.location.search);
  if(
    params.get('analytics') == 'disabled' ||
    window.localStorage.getItem('analytics') == 'disabled' ||
    userAgentService.isBot()
  ) {
    window.localStorage.setItem('analytics', 'disabled');
    return false
  }
  return ENABLED;
}

function buildAttrs(ID, SRC){
  return {
    async: '',
    defer: '',
    'data-website-id': ID,
    'data-stasta': '',
    src: SRC
  };
}

export default _public;
