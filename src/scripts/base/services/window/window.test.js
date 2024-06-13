import windowService from './window';

describe('Window Service', () => {
  it('should get location origin', () => {
    expect(windowService.getLocationOrigin()).toEqual(window.location.origin);
  });

  it('should get user agent', () => {
    expect(windowService.getUserAgent()).toEqual(window.navigator.userAgent);
  });
});
