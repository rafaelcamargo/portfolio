import windowService from './window';

describe('Window Service', () => {
  it('should get location origin', () => {
    expect(windowService.getLocationOrigin()).toEqual(window.location.origin);
  });
});
