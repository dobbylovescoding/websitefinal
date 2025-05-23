
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				lwrnavy: {
					DEFAULT: '#0B0C10',
					light: '#1F2833', 
					dark: '#070809'
				},
				lwrgold: {
					DEFAULT: '#66FCF1',
					light: '#7dfcf3',
					dark: '#45A29E'
				},
				lwrgray: {
					DEFAULT: '#C5C6C7',
					light: '#d1d2d3',
					dark: '#b8b9ba'
				},
				lwrlight: {
					DEFAULT: '#C5C6C7',
					light: '#d1d2d3',
					dark: '#b8b9ba'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"fade-out": {
					"0%": {
						opacity: "1",
						transform: "translateY(0)"
					},
					"100%": {
						opacity: "0",
						transform: "translateY(10px)"
					}
				},
				"slide-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(100px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"slide-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-100px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"zoom-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.95)"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)"
					}
				},
				"parallax-slow": {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-10%)" }
				},
				"parallax-medium": {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-20%)" }
				},
				"parallax-fast": {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-30%)" }
				},
				// NEW animations
				typing: {
					from: { width: "0" },
					to: { width: "100%" }
				},
				blink: {
					"0%, 100%": { borderColor: "transparent" },
					"50%": { borderColor: "black" }
				},
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" }
				},
				pop: {
					"0%": {
						opacity: "0",
						transform: "scale(0.8) translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1) translateY(0)"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.5s ease-out forwards",
				"fade-out": "fade-out 0.5s ease-out forwards",
				"slide-up": "slide-up 0.7s ease-out forwards",
				"slide-down": "slide-down 0.7s ease-out forwards",
				"zoom-in": "zoom-in 0.5s ease-out forwards",
				// NEW animations
				"typing": "typing 2s steps(22) forwards, blink 0.7s step-end infinite",
				"wiggle": "wiggle 0.5s ease-in-out infinite",
				"pop": "pop 0.3s ease-out forwards"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
