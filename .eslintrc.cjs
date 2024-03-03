/* eslint-env node */
module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:astro/recommended",
		"plugin:perfectionist/recommended-natural",
		"prettier",
	],
	plugins: ["@typescript-eslint", "perfectionist"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	root: true,
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			processor: "astro/client-side-ts",
			rules: {
				// "astro/no-set-html-directive": "error"
			},
		},
		// ...
		{
			files: ["*.css.ts"],
			rules: {
				"perfectionist/sort-objects": "off",
			},
		},
	],
};
