/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["./src/tests"],
  moduleFileExtensions: ['ts', 'js', "json", "node"],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testMatch: ['**/src/tests/**/*.test.ts'],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage'
};

export default config;
