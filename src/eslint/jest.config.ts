import { defineEslintConfig } from "../utils/define-eslint-config.util";

export const EslintJestConfig = defineEslintConfig({
    extends: ["plugin:jest/recommended"]
});
