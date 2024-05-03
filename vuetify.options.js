import colors from 'vuetify/es5/util/colors'

export default {
  //   customVariables: ['~/assets/variables.scss'],
  //   treeShake: true,
  icons: {
    values: {
      dropdown: 'mdi-chevron-down',
    },
  },
  theme: {
    dark: false,
    options: {
      customProperties: true,
      variations: false,
    },
    themes: {
      light: {
        primary: '#18898D',
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
        'primary-main': '#18898D',
        'primary-dark': '#126A6D',
        'primary-light': '#1EAAAE',
        'primary-opacity-50': '#8BC4C6',
        'primary-opacity-10': '#E8F3F4',
        'primary-opacity-5': '#F3F9F9',

        'dark-main': '#1B1D21',
        'dark-grey-1': '#808191',
        'dark-grey-2': '#F0F3F6',
        'dark-grey-3': '#F9FBFD',
        'dark-grey-4': 'F1F1F1',
        'dark-opacity-20': '#1B1D21',
        // 'dark-grey-50': 'rgba(27, 29, 33, 0.5)',
        // 'dark-grey-70': 'rgba(27, 29, 33, 0.7)',
        'dark-white': '#FFFFFF',

        'accent-01-main': '#3454BE',
        'accent-01-dark': '#19348D',
        'accent-01-light': '#5579EF',
        'accent-01-opacity-50': '#3454BE',

        'accent-02-main': '#FFCE73',
        'accent-02-light': '#FF9A7B',
        'accent-02-dark': '#EE6060',
      },
    },
  },
}
