import { defineConfig } from "bauen";

export default defineConfig({
    entries: ["./src/index.ts"],
    outputs: ["cjs", "esm"]
});
