const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
    env: {
        node: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        eqeqeq: "error",
        quotes: [2, "double"],
        semi: [2, "always"],
        curly: ["error", "all"],
        indent: "off",
        "max-lines": ["warn", { max: 100 }],
        "comma-dangle": ["error", "never"],
        "no-unused-vars": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-unused-vars": "warn"
    }
});
