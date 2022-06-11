import { EslintConfig } from "eslint-define-config";
import merge from "lodash.merge";

export function mergeEslintConfig(...configs: EslintConfig[]) {
    return merge({}, ...configs);
}
