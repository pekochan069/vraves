import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const socialTypes = sqliteTable("social_types", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	baseUrl: text("base_url").notNull(),
	icon: text("icon"),
});
