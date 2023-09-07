/** @type {import('tailwindcss').Config} */
module.exports = {
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
        jackson: {
          100: '#FFD166',
          200: '#87BFFF',
          300: '#26547C',
          400: '#ADD7F6',
        }
      },
      screens: {
        '3xl': '1800px',
      },
    },
    fontFamily: [
      
    ]
  },
  plugins: [],
}
