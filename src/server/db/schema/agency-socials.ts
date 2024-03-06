import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

import { agencies } from "./agencies";
import { socials } from "./socials";

export const agencySocials = sqliteTable("agency_socials", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	agencyId: integer("agency_id")
		.notNull()
		.references(() => agencies.id),
	socialId: integer("social_id")
		.notNull()
		.references(() => socials.id),
});
