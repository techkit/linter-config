import { UserConfig as CommitlintConfig } from "@commitlint/types";
import merge from "lodash.merge";

export function mergeCommitlintConfig(...configs: CommitlintConfig[]) {
    return merge({}, ...configs);
}
