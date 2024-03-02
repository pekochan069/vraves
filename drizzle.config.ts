import type { Config } from "drizzle-kit";

export default {
  dbCredentials: {
    authToken: process.env.DB_AUTH_TOKEN ?? "",
    url: process.env.DB_URL ?? "",
  },
  driver: "turso",
  out: "./drizzle",
  schema: "./src/server/db/schema",
} satisfies Config;
