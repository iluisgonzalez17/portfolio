/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#000000',
				'secondary': '#ffffff',
				'third': '#CE1141',
				'black': '#212121',
				'white': '#ffffff',
				'gray': '#808080e2'
			  },
			backgroundImage: {
				'header': '#00000033'
			},
			borderColor: {
				'header': '#7c39fd47'

			},
			fontSize: {
				sm: '0.8rem',
				base: '1rem',
				xl: '1.25rem',
				'2xl': '1.563rem',
				'3xl': '1.953rem',
				'4xl': '2.441rem',
				'5xl': '3.052rem',
			},
			animation: {
				'infinite-scroll': 'infinite-scroll 50s linear infinite',
			},
			keyframes: {
				'infinite-scroll': {
				  from: { transform: 'translateX(0)' },
				  to: { transform: 'translateX(-100%)' },
				}
			  } 
			
		},
	},
	plugins: [],
}
