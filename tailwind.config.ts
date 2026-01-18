import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-black': '#0C0C0C',
        'main-yellow': '#E2FF02',
        'main-white': '#F5F5F5',
        'main-light-yello': '#F3FF99',
      },
      screens: {
        'desktop-media-max': { max: '1023px' }, // => @media (max-width: 1023px)
        'desktop-media-min': { min: '1024px' }, // => @media (min-width: 1024px)
        desktop: '1280px',
        large_desktop: '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
