import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import stylistic from '@stylistic/eslint-plugin'

// Linting (correctness) and formatting (code style) both run through ESLint.
// Formatting rules come from ESLint Stylistic — see docs/code-guide.md.
export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/coverage/**']),

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,

  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: false,
    commaDangle: 'always-multiline',
    braceStyle: '1tbs',
  }),

  {
    name: 'app/rules',
    rules: {
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/component-api-style': ['error', ['script-setup']],
      'vue/define-macros-order': 'error',
      'vue/no-unused-refs': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: 1 }],
      'vue/singleline-html-element-content-newline': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
)
