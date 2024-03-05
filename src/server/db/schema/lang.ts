import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const langs = sqliteTable("langs", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	ietf_tag: text("ietf_tag").notNull(),
	description: text("description").notNull(),
});
