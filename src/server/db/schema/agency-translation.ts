import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { agencies } from "./agency";
import { langs } from "./lang";

export const agencyTranslations = sqliteTable("agency_translations", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	agencyId: integer("agency_id")
		.notNull()
		.references(() => agencies.id),
	langId: integer("lang_id")
		.notNull()
		.references(() => langs.id),
	name: text("name").notNull(),
});
