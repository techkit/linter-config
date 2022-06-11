import { defineEslintConfig } from "../utils/define-eslint-config.util";

export const EslintBaseConfig = defineEslintConfig({
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    parserOptions: {
        sourceType: "module"
    },
    extends: ["eslint:recommended"],
    rules: {
        eqeqeq: "error",
        quotes: [2, "double"],
        semi: [2, "always"],
        curly: "off",
        indent: ["warn", 4, { SwitchCase: 1 }],
        "comma-dangle": ["error", "never"],
        "no-unused-vars": "off"
    }
});
