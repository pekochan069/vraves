import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

import { agencies } from "./agencies";
import { translations } from "./translations";

export const agencyTranslations = sqliteTable("agency_translations", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	agencyId: integer("agency_id")
		.notNull()
		.references(() => agencies.id),
	translationId: integer("translation_id")
		.notNull()
		.references(() => translations.id),
});
