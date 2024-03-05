import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { agencies } from "./agency";
import { socialTypes } from "./social-type";

export const agencySocials = sqliteTable("agency_socials", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	agencyId: integer("agency_id")
		.notNull()
		.references(() => agencies.id),
	socialTypeId: integer("social_type_id")
		.notNull()
		.references(() => socialTypes.id),
	handle: text("handle").notNull(),
});
