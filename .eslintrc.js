module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended'
  ],
  overrides: [
    {
      env: {
        jest: true
      },
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ]
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  root: true,
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'object-curly-spacing': ['error', 'never'],
    quotes: ['error', 'single'],
    'vue/html-closing-bracket-newline': ['error', {
      multiline: 'always',
      singleline: 'never'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      endTag: 'never',
      selfClosingTag: 'always',
      startTag: 'never'
    }],
    'vue/html-indent': ['error', 2, {
      alignAttributesVertically: true,
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      ignores: []
    }],
    'vue/html-quotes': 'error',
    'vue/max-attributes-per-line': ['error', {
      multiline: {
        allowFirstLine: false,
        max: 1
      },
      singleline: 2
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-multi-spaces': ['error', {
      ignoreProperties: false
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/require-default-prop': ['warn'],
    'vue/require-prop-types': ['warn'],
    'vue/sort-keys': ['warn', 'asc', {
      'natural': true
    }]
  }
}
