module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'linebreak-style': [
      'error',
      'unix',
    ],
  },
  'ignorePatterns': [
    'node_modules/',
    'build/',
  ],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};