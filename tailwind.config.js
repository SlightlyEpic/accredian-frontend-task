/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{css,tsx,jsx}',
    './src/**/*.{css,tsx,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'azure': {
          '50': '#eff8ff',
          '100': '#dbedfe',
          '200': '#bfe1fe',
          '300': '#92d0fe',
          '400': '#5fb4fb',
          '500': '#3a95f7',
          '600': '#2074ec',
          '700': '#1c60d9',
          '800': '#1d4db0',
          '900': '#1d458b',
          '950': '#172b54',
        },
      }
    },
  },
  plugins: [],
}
