const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000842',
        'primary-hover': '#000420',
        'primary-grey': '#999999',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
})
