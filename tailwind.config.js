module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          '100': '#F1F4F8',
          '200': '#DCE2EC',
          '300': '#C1CCDB',
          '400': '#A5B2C7',
          '500': '#8A99B0',
          '600': '#6B7C97',
          '700': '#526480',
          '800': '#3C4D67',
          '900': '#2C3B52',
        },
        teal: {
          '100': '#E9FBFF',
          '200': '#D1F6FC',
          '300': '#ABE7F1',
          '400': '#88CEDA',
          '500': '#75BBC8',
          '600': '#6AAEBB',
          '700': '#538E9A',
          '800': '#467A85',
          '900': '#2A4C53',
        },
        orange: {
          '500': '#FF8900'
        }
      },
      rotate: {
        "360": '360deg'
      },
      fontSize: {
        '2xs': '.65rem'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      }
    },
    fontFamily: {
      'body': ['IBM Plex Sans', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'headers': ['IBM Plex Sans Condensed', "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
    linearGradientDirections: { // defaults to these values
      't': 'to top',
      'tr': 'to top right',
      'r': 'to right',
      'br': 'to bottom right',
      'b': 'to bottom',
      'bl': 'to bottom left',
      'l': 'to left',
      'tl': 'to top left',
    },
    linearGradientColors: { // defaults to {}
      'blue-900-blue-700': ['#2C3B52', '#526480'],
      'transparent-teal-200': ['transparent', '#D1F6FC']
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'group-hover'],
    rotate: ['responsive', 'hover', 'group-hover'],
    gridRow: ['responsive', 'hover'],
    gridRowStart: ['responsive', 'hover'],
    gridRowEnd: ['responsive', 'hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-gradients'),
  ],
}