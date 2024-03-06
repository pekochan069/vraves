import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { socialTypes } from "./social-types";

export const socials = sqliteTable("socials", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	handle: text("handle").notNull(),
	socialTypeId: integer("social_type_id")
		.notNull()
		.references(() => socialTypes.id),
});
