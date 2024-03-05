import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import htmx from "astro-htmx";

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  integrations: [tailwind(), htmx()],
  output: "server",
});
