import { eq } from "drizzle-orm";
import { sqliteView } from "drizzle-orm/sqlite-core";

import { vtubers } from "./vtubers";

export const retiredView = sqliteView("retired_view").as((qb) =>
	qb
		.select({
			id: vtubers.id,
			name: vtubers.name,
			icon: vtubers.icon,
			retireDate: vtubers.retireDate,
			retireReason: vtubers.retireReason,
			agencyId: vtubers.agencyId,
		})
		.from(vtubers)
		.where(eq(vtubers.retired, true)),
);
