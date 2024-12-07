const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT ({
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: 'rgba(99,171,69,.6)',
            DEFAULT: '#63AB45',
            dark: '#228b22'
          },
          customGreen: '#22b573',
          titleBlack: '#100C08'
        },
        fontFamily: {
          rubik: ["Rubik", 'sans-serif'],
          jost: ["Jost", 'sans-serif'],
          inter: ["Inter", 'sans-serif'],
        },
        backgroundImage: {
          'visa-form-bg': 'url("https://i.ibb.co.com/c8BqM00/add-visa-bg.png")',
          'faq-bg': 'url("https://i.ibb.co.com/FYtnNJM/faq.png")',
        },
      },
    },
    plugins: [
      require('daisyui'),
      function({ addVariant }) {
        addVariant('not-last', '&:not(:last-child)');
      },
    ],
});

