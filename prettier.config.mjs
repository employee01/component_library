// prettier.config.mjs

/** @type {import('prettier').Config} */
export default {
  plugins: ["@shopify/prettier-plugin-liquid", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
};

