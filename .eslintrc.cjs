module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: "standard",
  overrides: [
    {
      files: [
        "**/*.spec.js",
        "**/*.spec.jsx"
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    semi: "error",
    quotes: ["error", "double"]
  }
}
