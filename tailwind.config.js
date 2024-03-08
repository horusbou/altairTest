/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
        extend: {
            backgroundColor: {
              'blue-light': 'rgb(242 249 255/ 1)',
              'hide': "linear-gradient(to right, rgba(255, 255, 255, 0), white)",
            },
            borderRadius: {
              5: '5px'
            },
            colors: {
              primary: '#2F61AB',
              secondary: '#3070B7',
              'gray-thin': 'rgb(241 245 249)',
              bgGray: "#F1F1F1",
              logoBlack: "#21163A",
              logoGreen: "#2F61AB",
              fontColor: " #595861",
              grayColor: '#F1F5F9'
            },
            fontFamily: {
              montserrat: ['Montserrat', 'sans-serif']
            },
            fontSize: {
              heading: '60px',
              text: '18px'
            },
    },
  },
  plugins: [],
}
