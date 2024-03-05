import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { langs } from "./lang";
import { vtubers } from "./vtuber";

export const vtuberTranslations = sqliteTable("vtuber_translations", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	vtuberId: integer("vtuber_id")
		.notNull()
		.references(() => vtubers.id),
	langId: integer("lang_id")
		.notNull()
		.references(() => langs.id),
  name: text("name").notNull(),
});
