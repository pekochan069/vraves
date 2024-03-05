import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

import { vtubers } from "./vtuber";
import { vtuberSocials } from "./vtuber-social";

export const vtuberSocialsIntermediate = sqliteTable(
	"vtuber_social_intermediates",
	{
		id: integer("id").primaryKey({ autoIncrement: true }),
		vtuberId: integer("vtuber_id")
			.notNull()
			.references(() => vtubers.id),
		socialId: integer("social_id")
			.notNull()
			.references(() => vtuberSocials.id),
	},
);
