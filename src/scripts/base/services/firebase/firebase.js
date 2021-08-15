const REDIRECTED_ROUTES = require('../../constants/redirected-routes');

const _public = {};

_public.buildConfig = () => {
  return {
    hosting: {
      public: 'dist',
      cleanUrls: true,
      trailingSlash: true,
      headers: [
        {
          source: '**/*.atom',
          headers: [
            {
              key: 'content-type',
              value: 'application/atom+xml; charset=utf-8'
            }
          ]
        }
      ],
      redirects: [
        { source: '/stories', destination: '/blog', type: 301 },
        ...buildRedirects()
      ]
    }
  };
};

function buildRedirects(){
  return REDIRECTED_ROUTES.map(route => ({
    source: route,
    destination: `/blog${route}`,
    type: 301
  }));
}

module.exports = _public;
