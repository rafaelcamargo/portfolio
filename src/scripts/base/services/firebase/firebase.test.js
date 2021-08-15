const REDIRECTED_ROUTES = require('../../constants/redirected-routes');
const firebaseService = require('./firebase');

describe('Firebase Service', () => {
  function findRedirectBySource(redirects, source){
    return redirects.find(redirect => redirect.source === source);
  }

  it('should build configuration', () => {
    const { hosting } = firebaseService.buildConfig();
    expect(hosting.public).toEqual('dist');
    expect(hosting.cleanUrls).toEqual(true);
    expect(hosting.trailingSlash).toEqual(true);
    expect(hosting.headers).toEqual([
      {
        source: '**/*.atom',
        headers: [
          {
            key: 'content-type',
            value: 'application/atom+xml; charset=utf-8'
          }
        ]
      }
    ]);
    expect(findRedirectBySource(hosting.redirects, '/stories')).toEqual(expect.objectContaining({
      destination: '/blog',
      type: 301
    }));
    REDIRECTED_ROUTES.forEach(route => {
      expect(findRedirectBySource(hosting.redirects, route)).toEqual(expect.objectContaining({
        destination: `/blog${route}`,
        type: 301
      }));
    });
  });
});
