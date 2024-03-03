import { css, cva } from "styled-system/css";

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
		cursor: "pointer",
		_focusVisible: {
			ringWidth: 2,
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
			expandIcon: {
				position: "relative",
				bg: "primary",
				color: "primary.foreground",
				_hover: {
					bg: "primary/90",
				},
			},
			ringHover: {
				bg: "primary",
				color: "primary.foreground",
				transition: "all",
				duration: "300ms",
				_hover: {
					bg: "primary/90",
					ringWidth: 2,
					ringColor: "primary/90",
					ringOffset: 2,
				},
			},
			gooeyRight: {
				position: "relative",
				bg: "primary",
				color: "primary.foreground",
				zIndex: 0,
				overflow: "hidden",
				transition: "all",
				duration: "500ms",
				_before: {
					content: "''",
					position: "absolute",
					inset: 0,
					zIndex: -10,
					translateX: "150%",
					translateY: "150%",
					scale: 2.5,
					rounded: "full",
					bgGradient: "to-r",
					gradientFrom: "zinc.400",
					transition: "transform",
					duration: "1000ms",
					_hover: {
						translateX: "-150%",
						translateY: "-150%",
					},
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});

export const buttonIconLeftStyles = css({
	// w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100
	w: 0,
	translateX: "0%",
	pr: 0,
	opacity: 0,
	transition: "all",
	transitionDuration: "200ms",
	_groupHover: {
		w: 5,
		translateX: "100%",
		pr: 2,
		opacity: 100,
	},
});

export const buttonIconRightStyles = css({
	// w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100
	w: 0,
	translateX: "100%",
	pl: 0,
	opacity: 0,
	transition: "all",
	transitionDuration: "200ms",
	_groupHover: {
		w: 5,
		translateX: "0",
		pl: 2,
		opacity: 100,
	},
});
