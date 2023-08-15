// babel.config.js
module.exports = {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      '@babel/preset-react', // Add this preset for JSX support
    ],
  };
  