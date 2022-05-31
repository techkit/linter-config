import defu from "defu";
import { Options as PrettierConfig } from "prettier";

export function mergePrettierConfig(...configs: PrettierConfig[]) {
    return defu({}, ...configs);
}
