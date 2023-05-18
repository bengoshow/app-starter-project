module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src//*.js',
  ],
  coverageReporters: ['html'],
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
};
