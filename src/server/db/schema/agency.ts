import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const agencies = sqliteTable("agencies", {
	id: text("id").primaryKey(),
  name: text("name").notNull(),
});
