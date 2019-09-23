import ReactGA from 'react-ga';
import ENV from '@environment';
import analyticsService from './analytics';

describe('Analytics Service', () => {
  beforeEach(() => {
    ReactGA.initialize = jest.fn();
    ReactGA.pageview = jest.fn();
  });

  it('should initialize React GA in initialize', () => {
    analyticsService.init();
    expect(ReactGA.initialize).toHaveBeenCalledWith(ENV.ANALYTICS.GOOGLE.ID);
  });

  it('should track page views', () => {
    const pathname = '/skills';
    analyticsService.trackPageView(pathname);
    expect(ReactGA.pageview).toHaveBeenCalledWith(pathname);
  });
});
