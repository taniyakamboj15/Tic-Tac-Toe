/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      cream: "#F1DDBF",
      hgree: "#78938A",
      ngreen: "#92BA92",
      tgray: "#525E75",
      black: "#000000",
      white: "#FFFFFF",
      red: "#DC2626",
      blue: "#2563EB",
    },
    extend: {
      animation: {
        hflip: "flipHorizontal 1.5s ease-in-out",
        texthid: "hidetext 1.5s ease-in-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        flipHorizontal: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(90deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        hidetext: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
      dropShadow: {
        'lg': '0 10px 8px rgb(0 0 0 / 0.04), 0 4px 3px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
};
