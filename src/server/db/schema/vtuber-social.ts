import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { socialTypes } from "./social-type";
import { vtubers } from "./vtuber";

export const vtuberSocials = sqliteTable("vtuber_socials", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	vtuberId: integer("vtuber_id")
		.notNull()
		.references(() => vtubers.id),
	socialTypeId: integer("social_type_id")
		.notNull()
		.references(() => socialTypes.id),
	handle: text("handle").notNull(),
});
