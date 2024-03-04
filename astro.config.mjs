import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import htmx from "astro-htmx";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [tailwind(), htmx(), alpinejs()],
  output: "server"
});