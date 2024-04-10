/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint", "react", "prettier", "unused-imports", "simple-import-sort"],
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:@typescript-eslint/recommended"],
  rules: {
    "no-console": "error",
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "no-async-promise-executor": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "error",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: false,
        parser: "typescript",
        bracketSpacing: true,
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // Internal packages.
          ["^(@/components)(/.*|$)"],
          ["^(@/features)(/.*|$)"],
          ["^(@/public)(/.*|$)"],
          ["^(@/helpers)(/.*|$)"],
          ["^(@/hooks)(/.*|$)"],
          ["^(@/types)(/.*|$)"],
          ["^(@/providers)(/.*|$)"],
          ["^(@/redux)(/.*|$)"],
          ["^(@/services)(/.*|$)"],
          ["^(@/sanity)(/.*|$)"],
          ["^(@/scripts)(/.*|$)"],
          ["^(@/studio)(/.*|$)"],
          ["^(@/stories)(/.*|$)"],
          ["^(@/types)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
}
