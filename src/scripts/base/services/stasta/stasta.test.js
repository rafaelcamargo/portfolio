import { mockSearchParams } from '@scripts/base/services/testing/testing';
import stastaService from './stasta';

describe('Stasta Service', () => {
  afterEach(() => {
    mockSearchParams('');
    window.localStorage.removeItem('analytics')
  })

  function mockAnalyticsEnv(){
    return { STASTA: { SRC: '/stats.js', ID: '123' } };
  }

  it('should not initialize stasta by default', () => {
    const ENV_MOCK = mockAnalyticsEnv();
    stastaService.init(false, ENV_MOCK.STASTA);
    const tag = document.querySelector('script[data-stasta]');
    expect(tag).toEqual(null);
  });

  it('should not initialize stasta if analytics is disabled via search params', () => {
    mockSearchParams('analytics=disabled');
    const ENV_MOCK = mockAnalyticsEnv();
    stastaService.init(true, ENV_MOCK.STASTA);
    const tag = document.querySelector('script[data-stasta]');
    expect(tag).toEqual(null);
  });

  it('should not initialize stasta if analytics is disabled via local storage', () => {
    window.localStorage.setItem('analytics', 'disabled')
    const ENV_MOCK = mockAnalyticsEnv();
    stastaService.init(true, ENV_MOCK.STASTA);
    const tag = document.querySelector('script[data-stasta]');
    expect(tag).toEqual(null);
  });

  it('should initialize stasta', () => {
    const ENV_MOCK = mockAnalyticsEnv();
    stastaService.init(true, ENV_MOCK.STASTA);
    const tag = document.querySelector('script[data-stasta]');
    expect(tag.getAttribute('async')).toEqual('');
    expect(tag.getAttribute('defer')).toEqual('');
    expect(tag.getAttribute('data-website-id')).toEqual('123');
    expect(tag.getAttribute('src')).toEqual('/stats.js');
  });
});
