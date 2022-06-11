import merge from "lodash.merge";
import { Config as StylelintConfig } from "stylelint";

export function mergeStylelintConfig(...configs: StylelintConfig[]) {
    return merge({}, ...configs);
}
