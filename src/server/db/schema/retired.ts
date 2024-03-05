import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { vtubers } from "./vtuber";

export const retired = sqliteTable("retired", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	vtuberId: integer("vtuber_id")
		.notNull()
		.references(() => vtubers.id),
	retireDate: integer("retire_date", { mode: "timestamp" }).notNull(),
	retireReason: text("retire_reason").notNull(),
	reborn: integer("reborn", { mode: "boolean" }),
});
