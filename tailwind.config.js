/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/flowbite-react/**/*.js',
		'./pages/**/*.{ts,tsx}',
		'./pages/**/*.{ts,tsx}',
		'./public/**/*.html',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: [{ primary: ['Quicksand', 'sans-serif'] }],
			colors: { primary: '#8854C0', secondary: '#72737D', 'gray-1': '#E9E9EB' },
		},
	},
	plugins: [require('daisyui'), require('flowbite/plugin')],
};
