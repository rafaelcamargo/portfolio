import routeService from '@scripts/base/services/route/route';

describe('Route Service', () => {
  beforeEach(() => {
    window.open = jest.fn();
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

  it('should get current url', () => {
    const url = routeService.getCurrentUrl();
    expect(url).toEqual(window.location.href);
  });
});
