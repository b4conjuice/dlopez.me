module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // typography: theme => ({
    //   default: {
    //     css: {
    //       // color: theme('colors.cobalt'),
    //       color: false,
    //       '@apply text-cobalt dark:text-gray-300': '',
    //       strong: theme('colors.cobalt'),
    //       'h1, h2, h3, h4': {
    //         // color: theme('colors.cobalt'),
    //         color: false,
    //         '@apply text-cobalt dark:text-gray-300': '',
    //         fontWeight: 'bold',
    //         marginTop: 0,
    //       },
    //       h1: {
    //         fontSize: theme('text.3xl'),
    //         marginBottom: 0,
    //         textAlign: 'center',
    //       },
    //       a: {
    //         // color: theme('colors.cb-dusty-blue'),
    //         color: false,
    //         '@apply text-cb-dusty-blue dark:text-cb-pink': '',
    //       },
    //       'h3 > a': {
    //         color: false,
    //         '@apply text-cb-dusty-blue dark:text-cb-yellow': '',
    //         textDecoration: 'none',
    //       },
    //       'ul > li:before': {
    //         // backgroundColor: theme('colors.cb-dusty-blue'),
    //         backgroundColor: false,
    //         '@apply bg-cb-dusty-blue dark:bg-gray-600': '',
    //       },
    //     },
    //   },
    //   xl: {
    //     css: {
    //       'h1, h2, h3, h4': {
    //         marginTop: 0,
    //         fontWeight: 'bold',
    //       },
    //       h1: {
    //         fontSize: theme('text.3xl'),
    //       },
    //     },
    //   },
    //   sm: {
    //     css: {
    //       h1: {
    //         fontSize: theme('text.4xl'),
    //       },
    //     },
    //   },
    // }),
    extend: {
      colors: {
        cobalt: '#193549',
        'cb-blue': '#193549',
        'cb-yellow': '#ffc600',
        'cb-orange': '#ff9d00',
        'cb-mint': '#2affdf',
        'cb-off-blue': '#0d3a58',
        'cb-dusty-blue': '#35434d',
        'cb-dark-blue': '#15232d',
        'cb-pink': '#fb94ff',
        'cb-light-blue': '#9effff',
      },
      backgroundImage: () => ({
        milky: "url('/img/milky.jpg')",
      }),
      typography: ({ theme }) => ({
        '--tw-prose-body': theme('colors.pink[800]'),
        base: {
          // css: [
          //   {
          //     h3: {
          //       // textDecoration: 'none',
          //       color: theme('colors.pink[800]'),
          //     },
          //   },
          // ],
        },
      }),
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/typography')],
}
