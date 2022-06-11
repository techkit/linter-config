import merge from "lodash.merge";
import { Options as PrettierConfig } from "prettier";

export function mergePrettierConfig(...configs: PrettierConfig[]) {
    return merge({}, ...configs);
}
