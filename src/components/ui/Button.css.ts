import { cva } from "styled-system/css";

export const buttonStyles = cva({
	base: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		whiteSpace: "nowrap",
		rounded: "md",
		fontSize: "sm",
		fontWeight: "medium",
		transition: "colors",
		pointerEvents: "pointer",
		_focusVisible: {
			outline: "none",
			ring: 2,
			ringColor: "ring",
			ringOffset: 2,
		},
		_disabled: {
			pointerEvents: "none",
			opacity: 0.5,
		},
	},
	variants: {
		size: {
			sm: {
				h: 9,
				rounded: "md",
				px: 3,
			},
			md: {
				h: 10,
				px: 4,
				py: 2,
			},
			lg: {
				h: 11,
				rounded: "md",
				px: 8,
			},
			icon: {
				h: 10,
				w: 10,
			},
		},
		variant: {
			primary: {
				bg: "primary",
				color: "primary.foreground",
				_hover: {
					bg: "primary/90",
				},
			},
			destructive: {
				bg: "destructive",
				color: "destructive.foreground",
				_hover: {
					bg: "destructive/90",
				},
			},
			outline: {
				bg: "background",
				borderWidth: 1,
				borderStyle: "solid",
				borderColor: "border",
				_hover: {
					bg: "accent",
					color: "accent.foreground",
				},
			},
			secondary: {
				bg: "secondary",
				color: "secondary.foreground",
				_hover: {
					bg: "secondary/80",
				},
			},
			ghost: {
				_hover: {
					bg: "accent",
					color: "accent.foreground",
				},
			},
			link: {
				color: "primary",
				textUnderlineOffset: 4,
				_hover: {
					textDecoration: "underline",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
