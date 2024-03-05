import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { agencies } from "./agency";

export const vtubers = sqliteTable("vtubers", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	publicId: text("publicId").notNull().unique(),
	name: text("name").notNull(),
	agencyId: integer("agency_id")
		.notNull()
		.references(() => agencies.id),
	description: text("description"),
	debutDate: integer("debut_date", { mode: "timestamp" }),
	sex: text("sex").notNull(),
	birthday: integer("birthday", { mode: "timestamp" }),
	website: text("website"),
	icon: text("icon"),
	banner: text("banner"),
	mainImage: text("main_image"),
});
