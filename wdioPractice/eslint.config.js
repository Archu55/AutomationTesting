import js from '@eslint/js';
import globals from 'globals';
import { configs as wdioConfig } from 'eslint-plugin-wdio';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  // --- 1. Global Ignores ---
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      'coverage/',
      'reports',
      'results/',
      'test-results/',
      'allure-results/',
      '.wdio/',
      '*.log',
    ],
  },

  // --- 2. Base ESLint Recommended Configuration (Applies globally) ---
  js.configs.recommended,

  // --- 3. Prettier Plugin Configuration (Applies globally) ---
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Enforce Prettier formatting rules
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
          tabWidth: 2,
          useTabs: false,
          printWidth: 100,
          arrowParens: 'always',
          endOfLine: 'lf',
        },
      ],
    },
  },

  // --- 4. WebdriverIO, BDD, and Environment-Specific Configuration ---
  {
    // Apply this configuration only to required files
    files: ['**/*.js'],

    // Extend the recommended WebdriverIO rules
    ...wdioConfig['flat/recommended'],

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',

      globals: {
        // Correctly import all necessary environment globals
        ...globals.browser, // Includes browser, $, $$, expect, etc.
        ...globals.node,
        ...globals.es2021,

        // Add specific globals not covered by the standard sets
        allure: true,

        browser: 'readonly',
        $: 'readonly',
        $$: 'readonly',
        expect: 'readonly',

        // Cucumber globals (already mostly covered by the wdio recommended config, but safe to keep explicit)
        Given: 'readonly',
        When: 'readonly',
        Then: 'readonly',
        And: 'readonly',
        Before: 'readonly',
        After: 'readonly',
        BeforeAll: 'readonly',
        AfterAll: 'readonly',
      },
    },

    rules: {
      // --- WebdriverIO rules overrides ---
      'wdio/no-pause': 'warn',

      // --- Test-friendly ESLint rules overrides ---
      // These rules override settings inherited from `js.configs.recommended`
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'require-await': 'off',
      'no-return-await': 'off',
    },
  },
];
