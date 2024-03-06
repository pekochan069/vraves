import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { agencies } from "./agencies";

export const vtubers = sqliteTable("vtubers", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	publicId: text("publicId").notNull().unique(),
	name: text("name").notNull(),
	description: text("description"),
	debutDate: integer("debut_date", { mode: "timestamp" }),
	gender: text("gender").notNull(),
	birthday: integer("birthday", { mode: "timestamp" }),
	website: text("website"),
	icon: text("icon"),
	banner: text("banner"),
	mainImage: text("main_image"),
	retired: integer("retired", { mode: "boolean" }).notNull().default(true),
	retireDate: integer("retire_date", { mode: "timestamp" }),
	retireReason: text("retire_reason"),
	agencyId: integer("agency_id")
		.notNull()
		.references(() => agencies.id),
});
