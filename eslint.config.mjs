import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import tseslint, { plugin } from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"


export default defineConfig([
  { ignores: ["dist/"] },
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  ...tseslint.configs.recommended,
  {
    rules: {

      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "prettier/prettier": [
        "error", {
          endOfLine: "auto"
        }
      ]
    }
  }
]);