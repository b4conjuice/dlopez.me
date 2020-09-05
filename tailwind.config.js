module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: theme => ({
      default: {
        css: {
          color: theme('colors.cobalt'),
          strong: theme('colors.cobalt'),
          'h1, h2, h3, h4': {
            color: theme('colors.cobalt'),
            fontWeight: 'bold',
            marginTop: 0,
          },
          h1: {
            fontSize: theme('text.3xl'),
            marginBottom: 0,
            textAlign: 'center',
          },
          a: {
            color: theme('colors.cb-dusty-blue'),
          },
          'ul > li:before': {
            backgroundColor: theme('colors.cb-dusty-blue'),
          },
        },
      },
      xl: {
        css: {
          'h1, h2, h3, h4': {
            marginTop: 0,
            fontWeight: 'bold',
          },
          h1: {
            fontSize: theme('text.3xl'),
          },
        },
      },
      sm: {
        css: {
          h1: {
            fontSize: theme('text.4xl'),
          },
        },
      },
    }),
    extend: {
      colors: {
        cobalt: '#193549',
        'cb-blue': '#193549',
        'cb-yellow': '#ffc600',
        'cb-orange': '#FF9D00',
        'cb-mint': '#2AFFDF',
        'cb-off-blue': '#0D3A58',
        'cb-dusty-blue': '#35434d',
        'cb-dark-blue': '#15232D',
        'cb-pink': '#FB94FF',
        'cb-light-blue': '#9EFFFF',
      },
      backgroundImage: () => ({
        milky: "url('/img/milky.jpg')",
      }),
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/typography')],
}
