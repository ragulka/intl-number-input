module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'eslint-plugin-tsdoc'],
  ignorePatterns: ['dist/**', 'coverage/**', 'temp/**'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020
  }
}
