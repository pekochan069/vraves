import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

import { translations } from "./translations";
import { vtubers } from "./vtubers";

export const vtuberTranslations = sqliteTable("vtuber_translations", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	vtuberId: integer("vtuber_id")
		.notNull()
		.references(() => vtubers.id),
	translationId: integer("translation_id")
		.notNull()
		.references(() => translations.id),
});
