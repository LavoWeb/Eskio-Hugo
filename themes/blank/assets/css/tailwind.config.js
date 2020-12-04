const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      scale: {
        '500': '5',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  variants: {
    extend: {
      scale: ['group-hover'],
      translate: ['group-hover']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
