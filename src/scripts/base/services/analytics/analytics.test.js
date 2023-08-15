import DEV_ENV from '@scripts/../../environments/development';
import PROD_ENV from '@scripts/../../environments/production';
import GAnalytics from '@glorious/analytics';
import { GAnalyticsMock, ganalyticsInstanceMock } from '@scripts/base/mocks/glorious-analytics';
import envService from '@scripts/base/services/env/env';
import windowService from '@scripts/base/services/window/window';
import analyticsService from './analytics';

jest.mock('@glorious/analytics');
GAnalytics.mockImplementation(GAnalyticsMock);

describe('Analytics Service', () => {
  beforeEach(() => {
    envService.get = jest.fn(() => PROD_ENV);
    windowService.getLocationOrigin = jest.fn(() => PROD_ENV.APP.BASE_URL);
    ganalyticsInstanceMock.init = jest.fn();
    ganalyticsInstanceMock.trackPageview = jest.fn();
  });

  afterEach(() => {
    analyticsService.flush();
  });

  it('should not initialize analytics in development environment', () => {
    envService.get = jest.fn(() => DEV_ENV);
    analyticsService.init();
    expect(ganalyticsInstanceMock.init).not.toHaveBeenCalled();
  });

  it('should not track page view in development environment', () => {
    envService.get = jest.fn(() => DEV_ENV);
    analyticsService.init();
    analyticsService.trackPageView()
    expect(ganalyticsInstanceMock.trackPageview).not.toHaveBeenCalled();
  });

  it('should not initialize analytics in production environment if domain is not rafaelcamargo.com', () => {
    windowService.getLocationOrigin = jest.fn(() => 'http://localhost:3000')
    analyticsService.init();
    expect(ganalyticsInstanceMock.init).not.toHaveBeenCalled();
  });

  it('should initialize analytics in production environment', () => {
    analyticsService.init();
    expect(ganalyticsInstanceMock.init).toHaveBeenCalledWith(
      PROD_ENV.ANALYTICS.PLAUSIBLE.DOMAIN, undefined
    );
  });

  it('should track page view on initialize', () => {
    analyticsService.init();
    expect(ganalyticsInstanceMock.trackPageview).toHaveBeenCalledTimes(1);
  });

  it('should track page view', () => {
    analyticsService.init();
    analyticsService.trackPageView()
    expect(ganalyticsInstanceMock.trackPageview).toHaveBeenCalledTimes(2);
  });
});
