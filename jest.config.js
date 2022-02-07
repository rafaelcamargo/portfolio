const project = require('./project.json');

module.exports = {
  collectCoverageFrom: project.tests.source.files,
  coverageReporters: ['html'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  moduleNameMapper: {
    '@data\/(.*)$': `<rootDir>/${project.data.source.root}$1`,
    '@environment$': `<rootDir>/${project.environments.source.root}/development.js`,
    '@scripts\/(.*)$': `<rootDir>/${project.scripts.source.root}$1`,
    '@styles\/(.*)$': `<rootDir>/${project.styles.source.root}$1`,
    '@images\/(.*)$': `<rootDir>/${project.images.source.root}$1`,
    '@dist\/(.*)$': `<rootDir>/${project.scripts.dist.root}$1`,
    '^.+\\.css$': '<rootDir>/src/scripts/base/mocks/raw-files.js'
  },
  setupFilesAfterEnv: ['<rootDir>/src/scripts/base/mocks/global.js'],
  transform: {
    '^.+\\.(png|styl)$': '<rootDir>/src/scripts/base/mocks/raw-files.js',
    '^.+\\.js$': 'babel-jest'
  }
};
