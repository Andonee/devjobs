import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			violet: '#9e7f66',
			lightViolet: '#939BF4',
			darkBlue: '#19202D',
			midnight: '#121721',
			snowy: '#ffffff',
			lightGrey: '#F4F6F8',
			grey: '#9DAEC2',
			darkGrey: '#6E8098',
		},
	},
	plugins: [],
};
export default config;
