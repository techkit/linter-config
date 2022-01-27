import { defineCommitlintConfig } from "../utils/define-commitlint-config.util";

export const CommitlintBaseConfig = defineCommitlintConfig({
    extends: ["@commitlint/config-conventional"],
    rules: {
        "subject-case": [
            2,
            "always",
            ["sentence-case", "start-case", "pascal-case", "upper-case", "lower-case"]
        ],
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "cd",
                "ci",
                "deps",
                "docs",
                "feat",
                "fix",
                "perf",
                "release",
                "refactor",
                "revert",
                "style",
                "test",
                "sample",
                "wip",
                "workflow"
            ]
        ]
    }
});
