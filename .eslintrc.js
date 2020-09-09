module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["standard", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {},
};
