import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { langs } from "./langs";

export const translations = sqliteTable("translations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  value: text("value").notNull(),
  langId: integer("lang_id").notNull().references(() => langs.id),
});