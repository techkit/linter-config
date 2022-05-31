import defu from "defu";
import { EslintConfig } from "eslint-define-config";

export function mergeEslintConfig(...configs: EslintConfig[]) {
    return defu({}, ...configs);
}
