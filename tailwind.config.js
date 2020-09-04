module.exports = {
  purge: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      p1: '#5FB4A2',
      p2: '#203A4C',
      p3: '#33323D',
      s1: '#FAFAFA',
      s2: '#EAEAEB',
      s3: '#F43030',
      t1: '#979797',
      white: '#FFFFFF'
    },
    fontFamily: {
      sans: [
        '"Public Sans"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ],
      serif: ['"Ibarra Real Nova"', 'serif']
    },
    extend: {
      padding: {
        11: '3.5rem',
        7: '1.75rem',
        full: '100%',
        half: '50%',
        r92: '92%'
      },
      margin: {
        11: '3.5rem',
        7: '1.75rem'
      },
      letterSpacing: {
        2: '2px'
      },
      fontSize: {
        40: '2.5rem',
        50: '3.125rem'
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(95, 180, 162, 0.5)'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true
  }
};
