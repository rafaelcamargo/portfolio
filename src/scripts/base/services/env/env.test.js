import ENV from '@environment';
import envService from './env';

describe('Environment Service', () => {
  it('should get environment variables', () => {
    expect(envService.get()).toEqual(ENV)
  })
});
