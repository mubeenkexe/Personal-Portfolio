/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {

    fontFamily: {
      blackout: ['Blackout'],
      cube: ['Cube'],
      ibmplex: ['IBM Plex Mono', 'monospace']
    },

    fontSize: {
      'xxm': '0.500rem',
      'xm': '0.625rem',
      '12xl': '12rem',
    },

    backgroundImage: {
      'image': "url('./assets/imgs/bg.png')",
    },

    keyframes: {
      moveTextContent1: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      moveTextContent2: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      'moveTextContent-2': 'moveTextContent2 30s linear infinite',
      'moveTextContent-1': 'moveTextContent1 30s linear infinite',
    },
  }
};
export const plugins = []





