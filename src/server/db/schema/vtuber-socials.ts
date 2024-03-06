import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

import { socials } from "./socials";
import { vtubers } from "./vtubers";

export const vtuberSocials = sqliteTable("vtuber_socials", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	vtuberId: integer("vtuber_id")
		.notNull()
		.references(() => vtubers.id),
	socialId: integer("social_id")
		.notNull()
		.references(() => socials.id),
});
