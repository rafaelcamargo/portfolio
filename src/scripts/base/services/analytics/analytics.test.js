import ENV from '@environment';
import Plausible from 'plausible-tracker';
import { PlausibleMock, plausibleInstanceMock } from '@scripts/base/mocks/plausible';
import analyticsService from './analytics';
import searchParamsService from '@scripts/base/services/search-param/search-param';

jest.mock('plausible-tracker');
Plausible.mockImplementation(PlausibleMock);


describe('Analytics Service', () => {

  function disableAnalytics(){
    searchParamsService.get = jest.fn(() => ({ analytics: 'disabled' }));
  }

  beforeEach(() => {
    searchParamsService.get = jest.fn(() => ({}));
    plausibleInstanceMock.trackPageview.mockReset();
  });

  it('should track page view on initialize', () => {
    analyticsService.init();
    expect(plausibleInstanceMock.trackPageview).toHaveBeenCalled();
  });

  it('should not track page view on initialize if analytics is disabled', () => {
    disableAnalytics();
    analyticsService.init();
    expect(plausibleInstanceMock.trackPageview).not.toHaveBeenCalled();
  });

  it('should track page view', () => {
    analyticsService.trackPageView();
    expect(plausibleInstanceMock.trackPageview).toHaveBeenCalled();
  });

  it('should not track page view if analytics is disabled', () => {
    disableAnalytics();
    analyticsService.trackPageView();
    expect(plausibleInstanceMock.trackPageview).not.toHaveBeenCalled();
  });
});
