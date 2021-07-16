const _public = {};

_public.getRoutes = () => {
  const paths = getRoutePaths();
  return paths.map(path => `${path}?analytics=disabled`);
};

function getRoutePaths(){
  return [
    '/',
    '/contact',
    '/experience',
    '/projects',
    '/recommendations',
    '/skills',
    '/influences'
  ];
}

module.exports = _public;
