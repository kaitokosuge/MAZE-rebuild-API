import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        rules: {
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    selector: "variable",
                    format: ["camelCase"],
                },
                {
                    selector: "interface",
                    format: ["PascalCase"],
                },
                {
                    selector: "typeAlias",
                    format: ["PascalCase"],
                },
                {
                    selector: "typeParameter",
                    format: ["camelCase"],
                },
            ],
            "no-console": ["error"],
        },
    },
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
