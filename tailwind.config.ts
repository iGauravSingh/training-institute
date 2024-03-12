import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "quicksand": "Quicksand",
      "roboto": "Roboto",
      "dm": "DM"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'navcolor': '#212635',
        'newblue': '#2e8ece',
        'bluebackground': '#f4f9fd',
      },
      keyframes: {
        slide: {
          '0%': { translate: '0 -24px'},
          '100%': { translate: '0 0px'},
        },
        blinker: {
          '0%': { scale: '1'},
          '50%': { scale: '.25'},
          '100%': { scale: '1'}
        },
        moveup: {
          '0%': { translate: '0 20px'},
          '100%': { translate: '0 0px'},
        }
      },
      animation: {
        'slide-down': 'slide 0.2s linear',
        'blink-icon': 'blinker 0.5s linear',
        'moveup-cont': 'moveup 0.5s linear',
      }
    },
    
  },
  plugins: [],
};
export default config;
