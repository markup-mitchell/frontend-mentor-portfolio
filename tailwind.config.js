module.exports = {
  purge: [
    './**/*.html',
    './**/*.jsx',
    './**/*.js',
  ],
  theme: {
    colors: {
      p1: '#5FB4A2',
      p2: '#203A4C',
      p3: '#33323D',
      s1: '#FAFAFA',
      s2: '#EAEAEB',
      s3: '#F43030',
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
      letterSpacing: {
        '2': '2px'  
      },
      fontSize: {
        '40': '2.5rem'
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(95, 180, 162, 0.5)',
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true
  }
};
