import { defineEslintConfig } from "../utils/define-eslint-config.util";

export const EslintPrettierConfig = defineEslintConfig({
    extends: ["plugin:prettier/recommended"]
});
