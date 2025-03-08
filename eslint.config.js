import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier/recommended";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {ignores: ["/node_modules/", "/dist/", "/build/"]},
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node, sourceType: "module" }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  prettierPlugin
];