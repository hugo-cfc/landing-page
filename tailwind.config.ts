import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#005CAA',
        background: '#DBE6F1',
        'text-primary': '#252527',
      },
      keyframes: () => ({
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100' },
        },

        leftToRight: {
          '0%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
        rightToLeft: {
          '0%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        topToBottom: {
          '0%': { top: '-100px', opacity: '0' },
          '100%': { top: '0', opacity: '1' },
        },
      }),
      animation: {
        fade: 'fade 0.5s ease-in-out 1',
        leftToRight: 'leftToRight 0.5s',
        rightToLeft: 'rightToLeft 0.5s',
        topToBottom: 'topToBottom 0.5s',
      },
    },
  },
  plugins: [],
};
export default config;
