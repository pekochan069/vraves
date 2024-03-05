import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const agencies = sqliteTable("agencies", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	publicId: text("public_id").notNull().unique(),
	name: text("name").notNull(),
	website: text("website"),
	description: text("description"),
	icon: text("icon"),
	banner: text("banner"),
	mainImage: text("main_image"),
});
