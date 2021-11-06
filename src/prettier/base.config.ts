import { definePrettierConfig } from "../utils/define-prettier-config.util";

export const PrettierBaseConfig = definePrettierConfig({
    printWidth: 100,
    singleQuote: false,
    trailingComma: "none",
    arrowParens: "avoid"
});
