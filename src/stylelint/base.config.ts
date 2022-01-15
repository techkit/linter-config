import { Config as StylelintConfig } from "stylelint";
import configTwbsBootstrap from "stylelint-config-twbs-bootstrap";
import { mergeStylelintConfig } from "../utils/merge-stylelint-config.util";

export const StylelintBaseConfig: StylelintConfig = mergeStylelintConfig(configTwbsBootstrap, {
    rules: {
        indentation: 4,
        "string-quotes": "double",
        "selector-class-pattern": "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$"
    },
    overrides: [
        {
            files: "**/*.scss",
            rules: {
                "scss/dollar-variable-pattern": "^[a-z][a-z-\\d]*$"
            }
        }
    ]
});
