import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'among-red': '#C61111',
        'among-blue': '#2d75b6',
        'among-space': '#000B2E',
        'among-yellow': '#F5F557',
        'among-green': '#127F2D',
        'among-purple': '#6B2FBB',
        'among-beige': '#d3c7b6',
        'among-gray': 'rgb(80, 80, 80)',
        'among-white': '#F5F5F5',
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')",
        'stars-pattern': "url('/stars-bg.png')",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        amongus: {
          primary: "#C51111",
          secondary: "#132ED2",
          accent: "#F5F557",
          neutral: "#1a1a2e",
          "base-100": "#000B2E",
          info: "#3ABFF8",
          success: "#127F2D",
          warning: "#FBBD23",
          error: "#C51111",
        },
      },
    ],
  },
}