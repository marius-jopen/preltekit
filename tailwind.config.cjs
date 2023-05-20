/** @type {import('tailwindcss').Config}*/

const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
],

	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				'body': ['font-1', ...defaultTheme.fontFamily.mono]
			},
			colors: {
				'background': 'rgb(242 240 246)',
				'text': 'rgb(55 55 55)',

				// flowbite-svelte
				primary: {50:'#ebf5ff',100: '#fff1ee',200:'#ffe4de',300:'#ffd5cc',400:'#ffbcad',500:'#fe795d',600:'#ef562f',700:'#eb4f27',800:'#d3330a',900:'#d3330a'}
			}
		}
	},

	plugins: [
		require('flowbite/plugin')
	]
};

module.exports = config;