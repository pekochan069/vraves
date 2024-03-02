import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({
  authToken: process.env.DB_AUTH_TOKEN ?? "",
  url: process.env.DB_URL ?? "",
});

export const db = drizzle(client);
