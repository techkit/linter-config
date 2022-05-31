import defu from "defu";
import { Config as StylelintConfig } from "stylelint";

export function mergeStylelintConfig(...configs: StylelintConfig[]) {
    return defu({}, ...configs);
}
