(function(){
  const stastaTag = document.querySelector('[data-stasta]');

  function init(){
    statsEnabled() && start();
  }

  function statsEnabled(){
    const params = new URLSearchParams(window.location.search);
    if(params.get('analytics') == 'disabled' || window.localStorage.getItem('analytics') == 'disabled') {
      window.localStorage.setItem('analytics', 'disabled');
      return false;
    }
    return getStastaAttr('enabled') == 'true';
  }

  function start(){
    const id = getStastaAttr('id');
    const src = getStastaAttr('src');
    const tag = document.createElement('script');
    Object.entries(buildAttrs(id, src)).forEach(([key, value]) => tag.setAttribute(key, value));
    document.body.appendChild(tag);
  }

  function buildAttrs(id, src){
    return {
      async: '',
      defer: '',
      'data-website-id': id,
      src
    };
  }

  function getStastaAttr(attrName){
    return stastaTag.getAttribute(`data-${attrName}`)
  }

  init();
}());
