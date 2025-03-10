import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',

      'poop': '#565584',

      'menu-button': '#E0E3ED',
      'menu-back': '#101119',
      'menu-back-button': '#292B37',

      'dark-blue': '#161822',
      'green': '#4EB99D',
      'scroll-text-back': '#7568C833',
      'skill-bubble-back': '#FFFFFF33',
      'skill-tooltip-back': '#292B37',

      'purple': '#7568C8',
      'orange': '#F17A59',
      'dark-white': '#E0E3ED'

      
      
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '0.3em',
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
