module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'prettier',
    'airbnb'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react'
  ],
  rules: {
    "arrow-parens": [
			"error",
			"as-needed"
		],
    "comma-dangle": ["error", "never"],
    "semi": [2, "never"],
    "global-require": 0,
    "generator-star-spacing": [
      2,
      {
        "before": true,
        "after": false
      }
    ],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', 'js']}
    ],
    'import/prefer-default-export': 'off'
  }
};
