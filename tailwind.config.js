/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'demo-dark-blue': '#010A18',
        'demo-blue': '#02112A',
        'demo-teal': '#0C222F',
        'demo-light-blue': '#03284C',
        'demo-sky-blue': '#376683',
        'demo-yellow': '#FFE90B',
      },
    },
  },
  plugins: [],
}

