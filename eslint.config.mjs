import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }]
    }
  }  
];