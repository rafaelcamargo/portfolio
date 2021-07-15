import ENV from '@environment';
import analyticsService from './analytics';
import dateService from '@scripts/base/services/date/date';
import searchParamsService from '@scripts/base/services/search-param/search-param';

describe('Analytics Service', () => {
  const dateMock = new Date();
  const createElementMock = {
    setAttribute: jest.fn()
  };

  beforeEach(() => {
    document.createElement = jest.fn(() => {
      return { setAttribute: createElementMock.setAttribute };
    });
    document.head.appendChild = jest.fn();
    dateService.getNow = jest.fn(() => dateMock);
    searchParamsService.get = jest.fn(() => ({}));
  });

  afterEach(() => {
    delete window.dataLayer;
    window.location.hash = '';
    document.head.appendChild.mockClear();
  });

  it('should get analytics thirdy party code asynchronously', () => {
    analyticsService.init();
    expect(createElementMock.setAttribute).toHaveBeenCalledWith('async', 'true');
  });

  it('should get analytics thirdy party code passing analytics id', () => {
    analyticsService.init();
    expect(createElementMock.setAttribute).toHaveBeenCalledWith(
      'src',
      `https://www.googletagmanager.com/gtag/js?id=${ENV.ANALYTICS.GOOGLE.ID}`
    );
  });

  it('should append script tag to get analytics third party code on head', () => {
    document.head.appendChild = jest.fn();
    analyticsService.init();
    expect(typeof document.head.appendChild.mock.calls[0][0]).toEqual('object');
  });

  it('should not append analytics third party code on head if analytics is disabled', () => {
    document.head.appendChild = jest.fn();
    searchParamsService.get = jest.fn(() => ({ analytics: 'disabled' }));
    analyticsService.init();
    expect(document.head.appendChild).not.toHaveBeenCalled();
  })

  it('should configure analytics settings after append script tag on head', () => {
    analyticsService.init();
    expect(window.dataLayer[0][0]).toEqual('js');
    expect(window.dataLayer[0][1]).toEqual(dateMock);
    expect(window.dataLayer[1][0]).toEqual('config');
    expect(window.dataLayer[1][1]).toEqual(ENV.ANALYTICS.GOOGLE.ID);
    expect(window.dataLayer[1][2]).toEqual({page_path: '/'});
  });

  it('should not configure analytics if analytics is disabled', () => {
    searchParamsService.get = jest.fn(() => ({ analytics: 'disabled' }));
    analyticsService.init();
    expect(window.dataLayer).toEqual(undefined);
  });

  it('should track page view', () => {
    const path = '/author';
    analyticsService.trackPageView(path);
    expect(window.dataLayer[0][0]).toEqual('config');
    expect(window.dataLayer[0][1]).toEqual(ENV.ANALYTICS.GOOGLE.ID);
    expect(window.dataLayer[0][2]).toEqual({page_path: path});
  });

  it('should not track page view if analytics is disabled', () => {
    searchParamsService.get = jest.fn(() => ({ analytics: 'disabled' }));
    const path = '/author';
    analyticsService.trackPageView(path);
    expect(window.dataLayer).toEqual(undefined);
  });
});
