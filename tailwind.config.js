module.exports = {
   content: ['./src/**/*.{html,js}'],
   theme: {
      screens: {
         lg: { max: '1199.99px' },
         md: { max: '991.99px' },
         sm: { max: '767.99px' },
         xs: { max: '479.99px' },
      },
      extend: {
         fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
         },
         backgroundImage: {
            heroGradient: 'linear-gradient(110deg, #4923b4 0%, #e878cf 100%)',
         },
         colors: {
            blueviolet: '#5027b5',
            lightgrey: '#666768',
         },
         keyframes: {
            'fade-in': {
               from: {
                  opacity: 0,
               },
               to: {
                  opacity: 1,
               },
            },
            'fade-out': {
               from: {
                  opacity: 1,
               },
               to: {
                  opacity: 0,
               },
            },
         },
         animation: {
            fadeIn: '.2s fade-in ease-in-out',
            fadeOut: '.2s fade-out ease-in-out',
         },
      },
   },
   plugins: [],
};
