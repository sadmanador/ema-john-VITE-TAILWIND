/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    gridTemplateColumns: {
      // custom home grid
      'home': '4fr 1fr',
      '3': 'repeat(3,1fr)',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
