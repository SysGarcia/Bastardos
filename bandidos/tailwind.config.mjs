/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/flowbite/**/*.js"],
	theme: {
	  extend: {
		fontSize: {
		  title: '16rem',
		  subtitle: '2rem',
		  title_breakpoint: '13rem',
		  subtitle_breakpoint: '1rem',
		},
		colors: {
		  primary: "#FFFB00",
		  secondary: "#462A6E",
		  terciary: "#FF9500",
		  cuaternary: "#0BD31F",
		  space: "#281445",
		  empty: "#f0f0f0"
		},
		fontFamily: {
		  StreetSoul: ['StreetSoul', 'sans-serif'],
		  GimbalExtendedRegular: ['GimbalExtendedRegular', 'sans-serif'],
		  SteelFish: ['SteelFish', 'sans-serif']
		},
		screens: {
		  'FirstBreakPoint': '1060px', // Nuevo breakpoint personalizado
		  'SecondBreakPoint': '744px', // Nuevo breakpoint personalizado
		},
	  },
	},
	plugins: [require('flowbite/plugin')],
  }
  