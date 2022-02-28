const routes = require('./src/scripts/routes');

const _public = {};

_public.getRoutes = () => routes.map(path => `${path}?analytics=disabled`);

module.exports = _public;
