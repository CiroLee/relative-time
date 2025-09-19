export default {
  testEnvironment: 'node',
  transform: {
    '^.+\.js$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!babel.config.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};