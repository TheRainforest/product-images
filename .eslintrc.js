/**
 * These rules enforce the Airbnb Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-console': 'off',
    "linebreak-style": 0
  }
};
