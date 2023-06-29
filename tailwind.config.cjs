/** @type {import('tailwindcss').Config}*/

const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		extend: {
			fontFamily: {
				body: ['inter', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				background: 'rgb(242 240 246)',
				text: 'rgb(55 55 55)'
			}
		}
	},

	plugins: []
};

module.exports = config;