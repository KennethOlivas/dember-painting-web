import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  theme: {
    
    extend: {
      animation: {
        'text': 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
      },
      fontFamily: {
        sans: ['var(--font-cabin)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#e3fcf0", // or DEFAULT
          foreground: "#11181C", // or 50 to 900 DEFAULT
          primary: {
            foreground: "#FFFFFF",
            DEFAULT: "#0b7540",
          },
          secondary: {
            foreground: "#02130a",
            DEFAULT: "#f6d413",
          },
          accent: {
            foreground: "#FFFFFF",
            DEFAULT: "##12c46b",
          },
          // ... rest of the colors
        },
      },
    },
    layout: {
      disabledOpacity: "0.3", // opacity-[0.3]
      radius: {
        small: "2px", // rounded-small
        medium: "4px", // rounded-medium
        large: "6px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "1px", // border-medium
        large: "2px", // border-large
      },
    },
  })]
}

export default config
