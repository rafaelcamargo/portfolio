const fs = require('fs');
const path = require('path');
const { fileService } = require('../file/file');
const assetsService = require('./assets');

describe('Assets Service', () => {
  const DIST_FILES_DIRECTORY_FILEPATH = path.join(__dirname, '../../../../../dist');

  beforeEach(() => {
    fileService.write = jest.fn();
    fileService.readSync = jest.fn(() => '');
    fileService.collect = jest.fn((glob, onSuccess) => {
      const filepathsMock = {
        [`${DIST_FILES_DIRECTORY_FILEPATH}/**/*.html`]: [
          `${DIST_FILES_DIRECTORY_FILEPATH}/projects/index.html`,
          `${DIST_FILES_DIRECTORY_FILEPATH}/blog/index.html`,
          `${DIST_FILES_DIRECTORY_FILEPATH}/index.html`
        ]
      };
      onSuccess(filepathsMock[glob]);
    })
  });

  it('should handle relative paths in distributable HTML files', () => {
    assetsService.handleRelativePaths();
    expect(fileService.write).toHaveBeenCalledWith(`${DIST_FILES_DIRECTORY_FILEPATH}/projects/index.html`, expect.any(String));
  });

  it('should not handle relative paths in HTML files inside blog directory', () => {
    assetsService.handleRelativePaths();
    expect(fileService.write).not.toHaveBeenCalledWith(`${DIST_FILES_DIRECTORY_FILEPATH}/blog/index.html`, expect.any(String));
  });

  it('should fix path reference for relative assets', () => {
    const projectsPage = fs.readFileSync(path.join(__dirname, '../../mocks/projects.html'), { encoding: 'utf-8' });
    const result = assetsService.fixRelativePaths(projectsPage);
    expect(result).toContain('<link href="/assets/main-247fb3a918859218f295.css" rel="stylesheet" />');
    expect(result).toContain('<img alt="logo typenik" src="/assets/images/logo-typenik.svg" />');
    expect(result).toContain('<img alt="logo taslonic" src="/assets/images/logo-taslonic.svg" />');
    expect(result).toContain('<img alt="logo pitsby" src="/assets/images/logo-pitsby.svg" />');
    expect(result).toContain('<img alt="logo glorious-demo" src="/assets/images/logo-glorious-demo.svg" />');
    expect(result).toContain('<img alt="logo weather-now" src="/assets/images/logo-weather-now.svg" />');
    expect(result).toContain('<img alt="logo woblast" src="/assets/images/logo-woblast.svg" />');
    expect(result).toContain('<img alt="logo nashios" src="/assets/images/logo-nashios.svg" />');
    expect(result).toContain('<img alt="logo teleflik" src="/assets/images/logo-teleflik.svg" />');
    expect(result).toContain('<img alt="logo dollert" src="/assets/images/logo-dollert.svg" />');
    expect(result).toContain('<script src="/assets/main-247fb3a918859218f295.js" type="text/javascript"></script>');
  });
});
