import analyticsService from '@scripts/base/services/analytics/analytics';
import routeService from '@scripts/base/services/route/route';

describe('Route Service', () => {
  function mockHistory({ pathname }){
    return {
      listen: jest.fn(cb => cb()),
      location: { pathname }
    };
  }

  beforeEach(() => {
    analyticsService.trackPageView = jest.fn();
    window.open = jest.fn();
  });

  it('should set history on initialize', () => {
    const historyMock = mockHistory({ pathname: '/' });
    routeService.init(historyMock);
    expect(routeService.history).toEqual(historyMock);
  });

  it('should listen for history changes on initialize', () => {
    const pathname = '/skills';
    routeService.init(mockHistory({ pathname }));
    expect(analyticsService.trackPageView).toHaveBeenCalledWith(pathname);
  });

  it('should get current pathname', () => {
    expect(routeService.getCurrentPathname()).toEqual('/');
  });

  it('should open an url', () => {
    const url = 'http://some.url.com';
    routeService.openUrl(url);
    expect(window.open).toHaveBeenCalledWith(url);
  });

  it('should open an url with query params', () => {
    const url = 'http://some.url.com';
    const params = {
      name: 'João',
      surname: 'Guimarães'
    };
    routeService.openUrl(url, params);
    expect(window.open).toHaveBeenCalledWith(`${url}?name=Jo%C3%A3o&surname=Guimar%C3%A3es`);
  });
});
