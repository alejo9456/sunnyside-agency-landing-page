/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      fontWeight:{
        'semibold': '600',
        'bold': '700',
        'extrabold': '900'
      },
      colors:{
        "soft-red": "hsl(7, 99%, 70%)",
        "yellow": "hsl(51, 100%, 49%)",
        "dark-desaturated-cyan" : "hsl(167, 40%, 24%)", //(graphic design text)
        "dark-blue" : "hsl(198, 62%, 26%)", //(photography text)
        "dark-moderate-cyan": "hsl(168, 34%, 41%)", //(footer)

        // Neutral

        "very-dark-desaturated-blue": "hsl(212, 27%, 19%)",
        "very-dark-grayish-blue": "hsl(213, 9%, 39%)",
        "dark-grayish-blue": "hsl(232, 10%, 55%)",
        "grayish-blue": "hsl(210, 4%, 67%)",
        "white": "hsl(0, 0%, 100%)",

      },
      backgroundImage: {
        'header-desktop': "url('./images/desktop/image-header.jpg')",
        'header-mobile': "url('./images/mobile/image-header.jpg')",
        'graphic-design-desktop': "url('./images/desktop/image-graphic-design.jpg')",
        'graphic-design-mobile': "url('./images/mobile/image-graphic-design.jpg')",
        'photography-desktop': "url('./images/desktop/image-photography.jpg')",
        'photography-mobile': "url('./images/mobile/image-photography.jpg')",
      }
    },
  },
  plugins: [],
}

