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
});
