module.exports = {
  preset: 'vite-jest',

  testMatch: [
    '**/*.spec.ts?(x)',
    '**/__tests__/*.ts?(x)'
  ],
  testEnvironment: 'jest-environment-jsdom'
}