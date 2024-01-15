/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/no-v-html': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/require-prop-types': 'warn',
    'vue/require-v-for-key': 'warn',
    'vue/no-mutating-props': 'warn',
    'vue/valid-v-on': 'warn',
    'vue/no-multiple-template-root': 'warn',
    'vue/no-deprecated-destroyed-lifecycle': 'warn',
    'vue/valid-v-else-if': 'warn'
  }
};
