const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
  theme: {
    extend: {
			fontFamily: {
        'body': ['font-1', ...defaultTheme.fontFamily.mono]
      },
			colors: {
				'background': 'rgb(242 240 246)',
				'text': 'rgb(55 55 55)',
				'text-dark': 'rgb(77 77 77)',
				'text-medium': 'rgb(120 120 120)',
				'text-light': 'rgb(180 180 180)',
				'highlight-1': 'rgb(59 130 246)',
			}
		}
  },
  plugins: []
};