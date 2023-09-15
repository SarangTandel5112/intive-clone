const babelOptions = {
    presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  
  module.exports = require('babel-jest').default.createTransformer(babelOptions);