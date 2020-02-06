module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  settings: {
      'import/resolver': {
          node: {
              extension: ['.js', '.jsx'],
              moduleDirectory: ['node_modules', 'src/'],
          }
      }
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  rules: {
    semi: "error",
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"]
      }
    ],
    "react/forbid-prop-types": [
      2,
      { forbid: ["any"], checkContextTypes: true, checkChildContextTypes: true }
    ],
    "no-set-state": "off",
    "react/no-did-update-set-state": 0,
      "jsx-a11y/label-has-for": [ 2, {
        "required": {
          "some": [ "nesting", "id"  ]
        }
      }],
      "jsx-a11y/label-has-associated-control": 0
  }
};
