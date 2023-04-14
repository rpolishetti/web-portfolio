// https://eslint.org/docs/latest/use/configure/

module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
    commonjs: true,
    mocha: true,
    jest: true,
    "shared-node-browser": true
  },
  globals: {},
  extends: [
    "eslint:recommended", 
    "plugin:react/recommended",
    //"plugin:react/jsx-runtime"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "quotes": ["warn", "single"],
    "semi": [
      "error",
      "always"
    ]
  },
  settings: {
    react: {
      version: '18.2'
    }
  }
};
