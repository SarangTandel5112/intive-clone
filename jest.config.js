/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { compilerOptions } = require('./tsconfig.json');

const { pathsToModuleNameMapper } = require('ts-jest');

const paths = pathsToModuleNameMapper(compilerOptions.paths, {

  prefix: '<rootDir>/',

});

 

 

module.exports = {

  transform: {

    '^.+\\.[jt]sx?$': '<rootDir>/jest-preprocess.js',

  },

  moduleNameMapper: {

    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',

    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',

    ...paths,

  },

  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],

  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)'],

  globals: {

    __PATH_PREFIX__: '',

  },

  testEnvironment:'jsdom',

  setupFiles: ['<rootDir>/loadershim.js'],

  collectCoverage:true,

  collectCoverageFrom: [

    'src/components/**/*.{ts,tsx}',

    '!src/components/**/*.{stories styled ,test}.{ts,tsx}',

    '!src/components/**/*.stories.{ts,tsx}',

    '!src/components/**/*.styled.{ts,tsx}',

    '!src/components/**/*.test.{ts,tsx}',

  ],

  'coverageThreshold': {

    'global': {

      'branches': 100,

      'functions': 50,

      'lines': 50,

      'statements': -100

    }

  }

    

};