import windowService from '@scripts/base/services/window/window';
import userAgentService from './user-agent';

describe('User Agent Service', () => {
  function mockUserAgent(userAgent){
    windowService.getUserAgent = jest.fn(() => userAgent);
  }

  it('should answer true if user agent is a robot', () => {
    mockUserAgent('Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7 (compatible; Googlebot-Mobile/2.1; +http://www.google.com/bot.html)');
    expect(userAgentService.isBot()).toEqual(true);
  });

  it('should answer false if user agent is not a robot', () => {
    mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36');
    expect(userAgentService.isBot()).toEqual(false);
  });
});
