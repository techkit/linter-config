import { defineEslintConfig } from "../utils/define-eslint-config.util";

export const EslintTsConfig = defineEslintConfig({
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: "module",
                project: ["tsconfig.json", "packages/**/tsconfig.json"],
                ecmaFeatures: {
                    jsx: true
                }
            },
            plugins: ["@typescript-eslint"],
            extends: ["plugin:@typescript-eslint/recommended"],
            rules: {
                indent: "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/indent": ["warn", 4, { SwitchCase: 1 }],
                "@typescript-eslint/no-non-null-assertion": "off",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/no-unused-vars": "warn"
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
    ]
});
