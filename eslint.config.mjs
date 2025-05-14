// eslint.config.mjs
import prettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginJSX from "eslint-plugin-jsx-a11y";
import pluginPrettier from "eslint-plugin-prettier";
import pluginTSEslint from "@typescript-eslint/eslint-plugin";
import parserTSEslint from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["**/*.js"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: parserTSEslint,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      react: pluginReact,
      "jsx-a11y": pluginJSX,
      prettier: pluginPrettier,
      "@typescript-eslint": pluginTSEslint,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginJSX.configs.recommended.rules,
      ...pluginTSEslint.configs.recommended.rules,
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  prettier,
];
