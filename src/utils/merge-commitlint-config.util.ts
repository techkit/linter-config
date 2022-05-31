import { UserConfig as CommitlintConfig } from "@commitlint/types";
import defu from "defu";

export function mergeCommitlintConfig(...configs: CommitlintConfig[]) {
    return defu({}, ...configs);
}
