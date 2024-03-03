import { sva } from "styled-system/css";

export const indexStyles = sva({
	slots: ["h1"],
	base: {
		h1: {
			color: "background",
			bg: "foreground",
			w: "16",
			h: "16",
			rounded: "lg",
			ml: "4",
		},
	},
});
