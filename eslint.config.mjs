import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve the current file and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create FlatCompat instance for compatibility with older configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Assign the ESLint config array to a variable
const eslintConfig = [
  ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals"
  ),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"],
      "react/react-in-jsx-scope": "off", // Not needed with Next.js
    },
  },
];

// Export the configuration as default
export default eslintConfig;
