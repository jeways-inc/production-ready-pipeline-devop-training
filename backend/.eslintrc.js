module.exports = {
  env: {
    node: true,      // Enables Node.js global variables
    es2021: true,    // Modern ECMAScript features
  },
  extends: [
    'eslint:recommended', // Basic recommended rules
  ],
  parserOptions: {
    ecmaVersion: 'latest', // Latest ECMAScript version
    sourceType: 'module',  // Allows using ES modules
  },
  rules: {
    'no-unused-vars': 'warn',  // Warn about unused variables
    'no-console': 'off',       // Allow console.log (useful for backend)
    'semi': ['error', 'always'], // Require semicolons
    'quotes': ['error', 'single'], // Enforce single quotes
  },
};
