import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'brown-light': '#5E3D2F',
      'brown-dark': '#3D261D',
      'blue-light': '#B2E0EB',
      'blue-dark': '#288297',
      'green-dark': '#142A21',
      'green-light': '#2D5746',
    },
    extend: {
      
    },
  },
  plugins: [],
}
export default config
