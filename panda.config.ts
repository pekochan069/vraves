import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	exclude: [],
	include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],
	outdir: "styled-system",
	preflight: true,
	theme: {
		extend: {
			tokens: {
				colors: {
					background: {
						value: "hsl(var(--background))",
					},
					foreground: {
						value: "hsl(var(--foreground))",
					},
					muted: {
						DEFAULT: {
							value: "hsl(var(--muted))",
						},
						foreground: {
							value: "hsl(var(--muted-foreground))",
						},
					},
					primary: {
						DEFAULT: {
							value: "hsl(var(--primary))",
						},
						foreground: {
							value: "hsl(var(--primary-foreground))",
						},
						hover: {
							value: "hsl(var(--primary) / 90)",
						},
					},
					secondary: {
						DEFAULT: {
							value: "hsl(var(--secondary))",
						},
						foreground: {
							value: "hsl(var(--secondary-foreground))",
						},
					},
					destructive: {
						DEFAULT: {
							value: "hsl(var(--destructive))",
						},
						foreground: {
							value: "hsl(var(--destructive-foreground))",
						},
					},
					accent: {
						DEFAULT: {
							value: "hsl(var(--accent))",
						},
						foreground: {
							value: "hsl(var(--accent-foreground))",
						},
					},
					border: {
						value: "hsl(var(--border))",
					},
					input: {
						value: "hsl(var(--input))",
					},
					ring: {
						value: "hsl(var(--ring))",
					},
					popover: {
						DEFAULT: {
							value: "hsl(var(--popover))",
						},
						foreground: {
							value: "hsl(var(--popover-foreground))",
						},
					},
					card: {
						DEFAULT: {
							value: "hsl(var(--card))",
						},
						foreground: {
							value: "hsl(var(--card-foreground))",
						},
					},
				},
				radii: {
					lg: {
						value: "var(--radius)",
					},
					md: {
						value: "calc(var(--radius) - 2px)",
					},
					sm: {
						value: "calc(var(--radius) - 4px)",
					},
				},
			},
		},
	},
});
