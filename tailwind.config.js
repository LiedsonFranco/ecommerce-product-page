/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      textColor:{
        skin:{
          'Orange': 'hsl(26, 100%, 55%)',
          'Pale-orange': 'hsl(25, 100%, 94%)',
          'Dark-grayish-blue': 'hsl(219, 9%, 45%)',
          'Grayish-blue': 'hsl(220, 14%, 75%)',
        }
      },
      backgroundColor:{
        skin:{
          'Pale-orange': 'hsl(25, 100%, 94%)',
          'Grayish-blue': 'hsl(220, 14%, 75%)',
          'Light-grayish-blue': 'hsl(223, 64%, 98%)',
          'Orange': 'hsl(26, 100%, 55%)',
        }
      }
    },
  },
  plugins: [],
}

