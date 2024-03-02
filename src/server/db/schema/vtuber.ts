import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const vtubers = sqliteTable("vtubers", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
})