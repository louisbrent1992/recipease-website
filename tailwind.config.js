/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#D2600F",
				secondary: {
					light: "#C3CDC1",
					warm: "#FBE2D1",
				},
				heading: "#2C3F42",
				body: "#2B2E3C",
				card: "#FFF8F0",
				background: "#AABCB6",
			},
		},
	},
	plugins: [],
};
