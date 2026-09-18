/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          light: '#FCFCF9',
          DEFAULT: '#F5F5EE',
          dark: '#EBEAE0',
          grid: '#E2E1D5',
        },
        lime: {
          DEFAULT: '#CEEC2E',
          light: '#DCF749',
          bright: '#D8F735',
          dark: '#ACCA18',
        },
        ink: {
          DEFAULT: '#111111',
          light: '#262626',
          muted: '#555555',
        },
        lilac: {
          DEFAULT: '#9B7FE6',
          light: '#B49DF8',
          dark: '#8262D4',
        },
        accent: {
          maroon: '#6B162C',
          berry: '#8E1F3D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Archivo Black"', '"Syne"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'paper': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'paper-lg': '0 10px 30px -5px rgba(0, 0, 0, 0.15), 0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        'badge': '0 12px 35px -4px rgba(0, 0, 0, 0.25), 0 4px 10px -2px rgba(0, 0, 0, 0.12)',
        'sticker': '2px 4px 8px rgba(0, 0, 0, 0.12)',
        'torn': '0 8px 16px -4px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'badge-swing': 'swing 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(3deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(-3deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        }
      }
    },
  },
  plugins: [],
}
