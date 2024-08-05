module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': ["error", {
      "trailingComma": "es5",
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true,
      "arrowParens": "always",
      "htmlWhitespaceSensitivity": "ignore",
      "bracketSameLine": false,
      "singleAttributePerLine": true,
      "bracketSpacing": true,
      '@typescript-eslint/no-require-imports': 'off',
    }],
    "max-len": [
      "error",
      {
        "comments": 120,
        "code": 120
      }
    ],
  },
};
