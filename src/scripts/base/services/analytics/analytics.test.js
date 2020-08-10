import ENV from '@environment';
import { mixpanelMock } from '@scripts/base/mocks/mixpanel';
import analyticsService from './analytics';
import dateService from '@scripts/base/services/date/date';

describe('Analytics Service', () => {
  const dateMock = new Date();
  const createElementMock = {
    setAttribute: jest.fn()
  };

  function init({ analyticsEnabled = true } = {}) {
    const envMock = { ...ENV };
    envMock.ANALYTICS.ENABLED = analyticsEnabled;
    analyticsService.init(envMock);
  }

  beforeEach(() => {
    document.createElement = jest.fn(() => {
      return { setAttribute: createElementMock.setAttribute };
    });
    document.head.appendChild = jest.fn();
    dateService.getNow = jest.fn(() => dateMock);
    window.mixpanel = mixpanelMock;
  });

  afterEach(() => {
    delete window.dataLayer;
    mixpanelMock.init.mockClear();
    mixpanelMock.track.mockClear();
    window.location.hash = '';
  });

  it('should init mixpanel on initialize', () => {
    init();
    expect(window.mixpanel.init).toHaveBeenCalledWith(ENV.ANALYTICS.MIXPANEL.TOKEN);
  });

  it('should get analytics thirdy party code asynchronously', () => {
    init();
    expect(createElementMock.setAttribute).toHaveBeenCalledWith('async', 'true');
  });

  it('should get analytics thirdy party code passing analytics id', () => {
    init();
    expect(createElementMock.setAttribute).toHaveBeenCalledWith(
      'src',
      `https://www.googletagmanager.com/gtag/js?id=${ENV.ANALYTICS.GOOGLE.ID}`
    );
  });

  it('should append script tag to get analytics thirdy party code on head', () => {
    init();
    expect(typeof document.head.appendChild.mock.calls[0][0]).toEqual('object');
  });

  it('should configure analytics settings after append script tag on head', () => {
    init();
    expect(window.dataLayer[0][0]).toEqual('js');
    expect(window.dataLayer[0][1]).toEqual(dateMock);
    expect(window.dataLayer[1][0]).toEqual('config');
    expect(window.dataLayer[1][1]).toEqual(ENV.ANALYTICS.GOOGLE.ID);
    expect(window.dataLayer[1][2]).toEqual({page_path: '/'});
  });

  it('should track page view', () => {
    const path = '/author';
    analyticsService.trackPageView(path);
    expect(window.dataLayer[0][0]).toEqual('config');
    expect(window.dataLayer[0][1]).toEqual(ENV.ANALYTICS.GOOGLE.ID);
    expect(window.dataLayer[0][2]).toEqual({page_path: path});
    expect(window.mixpanel.track).toHaveBeenCalledWith('page viewed', { path });
  });

  it('should not track page view if environment does not allow it', () => {
    const path = '/author';
    init({ analyticsEnabled: false });
    analyticsService.trackPageView(path);
    expect(window.dataLayer).toEqual(undefined);
    expect(window.mixpanel.track).not.toHaveBeenCalled();
  });

  it('should send page view event track to mixpanel on initialize', () => {
    init();
    expect(window.mixpanel.track).toHaveBeenCalledWith('page viewed', {
      path: window.location.pathname
    });
  });

  it('should not send page view event track to mixpanel on initialize if environment does not allow it', () => {
    init({ analyticsEnabled: false });
    expect(window.mixpanel.track).not.toHaveBeenCalled();
  });

  it('should track event', () => {
    const eventName = 'mail link clicked';
    const data = { some: 'data' };
    init();
    analyticsService.trackEvent(eventName, data);
    expect(window.mixpanel.track).toHaveBeenCalledWith(eventName, data);
  });

  it('should not track event if environment does not allow it', () => {
    init({ analyticsEnabled: false });
    analyticsService.trackEvent('mail link clicked', { some: 'data' });
    expect(window.mixpanel.track).not.toHaveBeenCalled();
  });
});
