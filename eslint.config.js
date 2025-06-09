import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import jestDom from 'eslint-plugin-jest-dom';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      // 'react/jsx-no-target-blank': 'off',
      // 'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off',
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: false,
        },
      ],
    },
  },
  {
    files: ['**/*.{test,spec}.{js,jsx}'],
    languageOptions: {
      globals: { ...vitest.environments.env.globals },
    },
    plugins: {
      vitest,
      'testing-library': testingLibrary,
      'jest-dom': jestDom,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      ...testingLibrary.configs['flat/react'].rules,
      ...jestDom.configs['flat/recommended'].rules,
    },
  },
];
