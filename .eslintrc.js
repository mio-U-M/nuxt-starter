module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/order-in-components': 'error',
    'new-cap': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'warn'
  }
}
