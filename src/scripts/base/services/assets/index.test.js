const assetsService = require('./assets');

describe('Assets Service Index', () => {
  beforeEach(() => {
    assetsService.handleRelativePaths = jest.fn();
  });

  it('should handle relative paths on initialize', () => {
    const index = require('.');
    expect(assetsService.handleRelativePaths).toHaveBeenCalled();
  });
});
