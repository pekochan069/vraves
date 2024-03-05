import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { langs } from "./lang";
import { socialTypes } from "./social-type";

export const socialTypeTranslations = sqliteTable("social_type_translations", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	socialTypeId: integer("social_type_id")
		.notNull()
		.references(() => socialTypes.id),
	langId: integer("lang_id")
		.notNull()
		.references(() => langs.id),
	name: text("name").notNull(),
});
