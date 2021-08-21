const devEnv = require('../../../../../environments/development');
const prodEnv = require('../../../../../environments/production');
const environmentService = require('./environment');

describe('Environment Service', () => {
  it('should return variables for development environment by default', () => {
    expect(environmentService.get()).toEqual(devEnv);
  });

  it('should optionally return variables according environment passed', () => {
    expect(environmentService.get('production')).toEqual(prodEnv);
  });
});
