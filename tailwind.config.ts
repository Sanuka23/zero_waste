import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      textShadow: {
        DEFAULT: '0 3px 5px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
export default config;
