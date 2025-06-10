import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
	darkMode: "class",
	content: [	
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/*/*/*.{js,ts,jsx,tsx,mdx}",
		"./src/*/*/*/*.{js,ts,jsx,tsx,mdx}",
		"./src/*/*/*/*/*.{js,ts,jsx,tsx,mdx}",
		"*.{js,ts,jsx,tsx,mdx}",
		{ raw: "bg-gradient-to-(r|l|t|b)" },
		{ raw: "from-(yellow|pink)" },
		{ raw: "to-(yellow|pink)" },
	],
	plugins: [],
};
export default config;
